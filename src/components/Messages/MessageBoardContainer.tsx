import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../TakoLoading/TakoLoading";
import { Submission } from "./Submission";
import { NavLink } from "react-router-dom";
import ScrollArrow from "./BackToTop";

import { Switch } from "../Common/Switch";
import { debounce } from "lodash";
// import MessageBoard from "./MessageBoard";

const MessageBoard = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
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
  const [sourceData, setSourceData] = useState([] as any);
  const [data, setData] = useState([] as any);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isToggledOnlyImg, setIsToggledOnlyImg] = useState(false);
  const [isToggledTextOnly, setisToggledTextOnly] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/prepdatav3.json`
      );
      const data = await response?.json();

      setSourceData(data);

      const rows = data.slice(offset, LIMIT);

      await awaitImgs(rows);

      setData(rows);

      setOffset(LIMIT + offset);
    };
    getData();
  }, []);

  const fetchMore = async () => {
    if (data.length !== 0) {
      const resultData = isToggledOnlyImg
        ? sourceData.filter((row: Submission) => {
            if (row.image != "") return row;
          })
        : sourceData;

      const rows = resultData.slice(offset, LIMIT + offset);

      if (rows.length === 0) {
        setHasMore(false);
      }

      await awaitImgs(rows);

      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
  };

  const handleFilter = debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value != "") {
        const resultData = sourceData.filter((row: Submission) => {
          return (
            row.user.toLowerCase().includes(event.target.value.toLowerCase()) ||
            row.message.toLowerCase().includes(event.target.value.toLowerCase())
          );
        });
        setHasMore(false);

        setData(resultData);
        setOffset(0);
      } else {
        const rows = sourceData.slice(offset, LIMIT);
        setHasMore(true);

        await awaitImgs(rows);

        setData(rows);
        setOffset(offset + LIMIT);
      }
    },
    1000
  );

  const OnlyImgToggle = async (value: boolean) => {
    if (value) {
      setData([]);

      const resultData = sourceData.filter((row: Submission) => {
        if (row.image != "") return row;
      });

      const rows = resultData.slice(0, LIMIT);

      setHasMore(true);
      await awaitImgs(rows);
      setData(rows);

      setOffset(LIMIT);

      setIsToggledOnlyImg(true);
      setisToggledTextOnly(false);
    } else {
      setOffset(0);
      const rows = sourceData.slice(0, LIMIT);
      setHasMore(true);
      await awaitImgs(rows);
      setData(rows);
      setOffset(LIMIT);
      setIsToggledOnlyImg(false);
    }
  };

  const OnlyTextToggle = async (value: boolean) => {
    if (value) {
      if (isToggledOnlyImg) {
        setOffset(0);
        const rows = sourceData.slice(0, LIMIT);
        setHasMore(true);
        await awaitImgs(rows);
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
      if (row.image && !row.image.includes("youtube")) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + "/Images/" + row.image;
            img.onerror = resolve;
            img.onload = resolve;
          })
        );
      }
    });

    await Promise.allSettled(promises);
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
        </FiltersContainer>
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          scrollThreshold={"50px"}
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
