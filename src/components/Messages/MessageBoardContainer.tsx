import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { readString } from "react-papaparse";

import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../TakoLoading/TakoLoading";
import MessageBoardSwitch from "./MessageBoardSwitch";
import { Submission } from "./Submission";
// import MessageBoard from "./MessageBoard";


const MessageBoard = styled.div` 
    width: 90%;
    margin-right: auto;
    margin-left: auto;
`;

const FiltersContainer = styled.div`
    margin: auto;
    margin-bottom: 35px;
`;

const Loader = styled.div`
    display: flex !important;
    justify-content: center;
    align-items: center;
`;


const SearchBar = styled.input`
    display: block;    
    width: 100%;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid;
    margin-bottom: 20px;
    outline: none;

    color: var(--ika-purple);
    text-align: left;
    font: normal normal normal 30px/37px Montserrat;
    letter-spacing: 0px;
    color: #564F68;
    opacity: 1;
    
    .switchs-container: {
        
        width: 40px;
    }
`;

// Limit of items to be loaded per time
const LIMIT = 10;

const MessageBoardContainer = (): JSX.Element => {
    const [csvData, setCSV] = useState([] as any);
    const [data, setData] = useState([] as any);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isToggledOnlyImg, setIsToggledOnlyImg] = useState(false);
    const [isToggledTextOnly, setisToggledTextOnly] = useState(false);

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

            // const promises = [] as any;
            // await Promise.all(promises);

            setData(rows);
            setOffset(LIMIT + offset);
        }
        fetchCSV();
    }, []);

    const fetchMore = async () => {
        if (data.length !== 0) {
            const rows = csvData.slice(offset, LIMIT + offset);
            if (rows.length === 0) {
                setHasMore(false);
            }
            // const promises = [] as any;
            // await Promise.all(promises);

            setData(data.concat(rows));
            setOffset(LIMIT + offset);
        }
    };

    const handleFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != '') {
            const resultData = csvData.filter((row: Submission) => {
                return row.user.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.message.toLowerCase().includes(event.target.value.toLowerCase())
            });
            setHasMore(false);
            setData((resultData));
            setOffset(0);
        } else {
            const rows = csvData.slice(offset, LIMIT);
            setHasMore(true);
            setData(rows);
            setOffset(offset + LIMIT);
        }
    };

    const OnlyImgToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setIsToggledOnlyImg(true);
            setisToggledTextOnly(false);
        } else {
            setIsToggledOnlyImg(false);
        }
    }

    const OnlyTextToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setisToggledTextOnly(true);
            setIsToggledOnlyImg(false);
        } else {
            setisToggledTextOnly(false);
        }
    }


    return (
        <MessageBoard>
            <FiltersContainer>
                <SearchBar
                    onChange={handleFilter}
                    placeholder="Search..."
                />

                <MessageBoardSwitch
                    id="image-switch"
                    label={'Only Images'}
                    toggled={isToggledOnlyImg}
                    onChange={OnlyImgToggle}
                />
                <MessageBoardSwitch
                    id="text-switch"
                    label={'Only messages'}
                    toggled={isToggledTextOnly}
                    onChange={OnlyTextToggle}
                />
            </FiltersContainer>
            <InfiniteScroll
                style={{ overflow: "hidden" }}
                scrollThreshold={"90%"}
                dataLength={data.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={
                    <Loader>
                        <TakoLoading />
                    </Loader>
                }
            >
                <TakoMessages
                    submissions={data}
                    isToggledOnlyImg={isToggledOnlyImg}
                    isToggledTextOnly={isToggledTextOnly}
                />
            </InfiniteScroll>
            {/* <MessageBoard
                data={data}
                fetchMore={fetchMore}
                hasMore={hasMore}
                isToggledOnlyImg={isToggledOnlyImg}
            ></MessageBoard> */}
        </MessageBoard>
    );
};


export default MessageBoardContainer;