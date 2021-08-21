import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { readString } from "react-papaparse";


import TakoMessages from "./TakoMessages";
import { Submission } from "./Submission";


const MessageBoard = styled.div`
  
`;

// const LIMIT = 10;

// const MessageBoard = ({ submissions }: { submissions: Submission[] }): JSX.Element => {
const MessageBoardContainer =  (): JSX.Element => {
    const [csvData, setCSV] = useState([] as any);
    // const [data, setData] = useState([]);
    // const [offset, setOffset] = useState(0);
    // const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/inadata.csv`);
            const reader = response!.body!.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csv = await decoder.decode(result.value);
            const { data: csvData } = readString(csv, { header: true });
            setCSV(csvData);

            // const rows = csvData.slice(offset, LIMIT);
            // const promises = [] as any;
            // rows.forEach(({ image }) => {
            //   if (image) {
            //     promises.push(
            //       new Promise((resolve) => {
            //         const img = new Image();
            //         img.src = image;
            //         img.onload = resolve;
            //       })
            //     );
            //   }
            // });
            // await Promise.all(promises);
            // setData(rows);
            // setOffset(LIMIT + offset);
        }
        fetchCSV();
    })

    return (
        <MessageBoard>
            <TakoMessages submissions={csvData}></TakoMessages>
        </MessageBoard>
    );
};


export default MessageBoardContainer;