import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { readString } from "react-papaparse";

import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../TakoLoading/TakoLoading";
import { Submission } from "./Submission";
import { NavLink } from "react-router-dom";
import ScrollArrow from "./BackToTop";

import { Switch } from "../Common/Switch";
// import MessageBoard from "./MessageBoard";

const MessageBoard = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;

const FiltersContainer = styled.div`
  margin: auto auto 35px;
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
  letter-spacing: 0;
  opacity: 1;

  .switchs-container {
    width: 40px;
  }
`;

const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: relative;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: left;
  font: normal normal normal 3em montserrat;
  letter-spacing: 0;
  justify-content: space-between;
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
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/inadata.csv`
      );
      const reader = response!.body!.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = await decoder.decode(result.value);
      const { data: csvData } = readString(csv, { header: true });
      setCSV(csvData);

      const rows = csvData.slice(offset, LIMIT);

      awaitImgs(rows);

      setData(rows);
      setOffset(LIMIT + offset);
    };
    fetchCSV();
  }, []);

  const fetchMore = async () => {
    if (data.length !== 0) {
      const resultData = isToggledOnlyImg
        ? csvData.filter((row: Submission) => {
            if (row.image != "") return row;
          })
        : csvData;

      const rows = resultData.slice(offset, LIMIT + offset);

      if (rows.length === 0) {
        setHasMore(false);
      }

      awaitImgs(rows);

      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
  };

  const handleFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value != "") {
      const resultData = csvData.filter((row: Submission) => {
        return (
          row.user.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.message.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      setHasMore(false);

      awaitImgs(resultData);

      setData(resultData);
      setOffset(0);
    } else {
      const rows = csvData.slice(offset, LIMIT);
      setHasMore(true);

      awaitImgs(rows);

      setData(rows);
      setOffset(offset + LIMIT);
    }
  };

  const OnlyImgToggle = async (value: boolean) => {
    if (value) {
      const resultData = csvData.filter((row: Submission) => {
        if (row.image != "") return row;
      });

      const rows = resultData.slice(0, LIMIT);

      setHasMore(true);
      awaitImgs(rows);
      setData(rows);

      setOffset(LIMIT);

      setIsToggledOnlyImg(true);
      setisToggledTextOnly(false);
    } else {
      setOffset(0);
      const rows = csvData.slice(0, LIMIT);
      setHasMore(true);
      awaitImgs(rows);
      setData(rows);
      setOffset(LIMIT);
      setIsToggledOnlyImg(false);
    }
  };

  const OnlyTextToggle = async (value: boolean) => {
    if (value) {
      if (isToggledOnlyImg) {
        setOffset(0);
        const rows = csvData.slice(0, LIMIT);
        setHasMore(true);
        awaitImgs(rows);
        setData(rows);
        setOffset(LIMIT);
        setIsToggledOnlyImg(false);
      }

      setisToggledTextOnly(true);
      setIsToggledOnlyImg(false);
    } else {
      setisToggledTextOnly(false);
    }
  };

  const awaitImgs = async (data: any) => {
    const promises = [] as any;

    data.forEach((row: any) => {
      if (row.image) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = row.image;
            img.onload = resolve;
          })
        );
      }
    });

    await Promise.all(promises);
  };

  return (
    <div>
      <Navbar>
        <NavLink exact to="/">
          {`< Messages`}
        </NavLink>
      </Navbar>
      <MessageBoard>
        <FiltersContainer>
          <SearchBar onChange={handleFilter} placeholder="Search..." />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
            }}
          >
            <Switch
              label="Only Images"
              value={isToggledOnlyImg}
              onChange={(value) => OnlyImgToggle(value)}
            />

            <Switch
              label="Only messages"
              value={isToggledTextOnly}
              onChange={(value) => OnlyTextToggle(value)}
            />
          </div>

          {/* <MessageBoardSwitch
                        id="image-switch"
                        label={'Only Images'}
                        toggled={isToggledOnlyImg}
                        onChange={OnlyImgToggle}
                    /> */}
          {/* <MessageBoardSwitch
                        id="text-switch"
                        label={'Only messages'}
                        toggled={isToggledTextOnly}
                        onChange={OnlyTextToggle}
                    /> */}
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
          endMessage={
            <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
          }
        >
          <TakoMessages
            submissions={data}
            isToggledOnlyImg={isToggledOnlyImg}
            isToggledTextOnly={isToggledTextOnly}
          />
        </InfiniteScroll>
        <ScrollArrow />
      </MessageBoard>
    </div>
  );
};

export default MessageBoardContainer;
