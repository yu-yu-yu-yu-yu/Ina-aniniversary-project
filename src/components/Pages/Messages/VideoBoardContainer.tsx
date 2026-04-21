import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {TakoLoading} from "../../Common/TakoLoading";
import {Submission} from "./Submission";
import {NavLink} from "react-router-dom";
import ScrollArrow from "./BackToTop";
import {debounce} from "lodash";
import {FiltersContainer, Loader, MessageBoard, SearchBar} from "./styles";
import {Navbar} from "../../Common/Navbar";
import TakoVideos from "./TakoVideos";
import {useFetch} from "../../../hooks/useFetch";

const LIMIT = 10;

const VideoBoardContainer = ({mode}: {mode:string}): JSX.Element => {
  const {data: rawData, loading, error} = useFetch<Submission[]>(`${process.env.PUBLIC_URL}/data/video.json`);
  const [sourceData, setSourceData] = useState([]);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (rawData) {
      const data = rawData.map((row) => {
        const key = mode === 'moments' ? 'moment' : 'wah';
        let link = row[key];
        if (link.includes('http') && !link.includes('clip')) {
          const match = /(?:\/|v=)([a-z_0-9-]{6,16}).*?(?:t=(\d+))?.*$/gmi.exec(link);
          const video_id = match ? match[1] : '';
          const timestamp = match ? match[2] : '';
          if (!video_id) console.log(link);
          link = `https://www.youtube.com/embed/${video_id}?start${timestamp}`;
        }
        if (mode === 'wah') {
          row.sub = row.wah_sub;
          row.message = '';
        }
        row.image = link;
        return row;
      });
      setSourceData(data);
      const rows = data.slice(0, LIMIT);
      setData(rows);
      setOffset(LIMIT);
    }
  }, [rawData, mode]);

  const fetchMore = async () => {
    if (data.length) {
      const rows = sourceData.slice(offset, LIMIT + offset);

      if (!rows.length) {
        setHasMore(false);
      }

      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
  };

  const handleFilter = debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
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
        const rows = sourceData.slice(0, LIMIT);
        setHasMore(true);

        setData(rows);
        setOffset(LIMIT);
      }
    },
    1000
  );

  return (
    <div>
      <Navbar>
        <NavLink exact to="/">
          <i className="fa fa-angle-left" /> {mode === 'moments' ? `Moments` : 'WAH'}
        </NavLink>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading videos: {error.message}</div>
      ) : (
        <MessageBoard>
          <FiltersContainer>
            <SearchBar onChange={handleFilter} placeholder="Search..." />
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
            <TakoVideos
              submissions={data}
              isToggledOnlyImg={false}
              isToggledTextOnly={false}
            />
          </InfiniteScroll>
          <ScrollArrow />
        </MessageBoard>
      )}
    </div>
  );
};

export default VideoBoardContainer;
