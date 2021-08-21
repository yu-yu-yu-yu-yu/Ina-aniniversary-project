import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { readString } from "react-papaparse";

import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../TakoLoading/TakoLoading";


const MessageBoard = styled.div`
  
`;

const Loader = styled.div`
  
    display: flex !important;
    justify-content: center;
    align-items: center;
`;

const LIMIT = 10;

const MessageBoardContainer = (): JSX.Element => {
    const [csvData, setCSV] = useState([] as any);
    const [data, setData] = useState([] as any);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/inadata.csv`);
            const reader = response!.body!.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csv = await decoder.decode(result.value);
            const { data: csvData } = readString(csv, { header: true });
            setCSV(csvData);

            const rows = csvData.slice(offset, LIMIT);

            const promises = [] as any;
            await Promise.all(promises);
            setData(rows);
            setOffset(LIMIT + offset);
        }
        fetchCSV();
    }, []);

    const fetchMore = async () => {
        if (data.length !== 0) {
            const rows = csvData.slice(offset, LIMIT + offset);
            if (rows.length === 0) {
                console.log(rows.length);
                setHasMore(false);
            }
            const promises = [] as any;

            await Promise.all(promises);
            setData(data.concat(rows));
            setOffset(LIMIT + offset);
        }
    };

    return (
        <MessageBoard>
            <InfiniteScroll
                style={{ overflow: "hidden" }}
                dataLength={data.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={
                    <Loader>
                        <TakoLoading/>
                    </Loader>
                }
            >
                <TakoMessages
                    submissions={data}
                />
            </InfiniteScroll>
        </MessageBoard>
    );
};


export default MessageBoardContainer;