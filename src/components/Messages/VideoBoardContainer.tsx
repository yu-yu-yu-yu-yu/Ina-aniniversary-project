import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {TakoLoading} from "../TakoLoading/TakoLoading";
import {Submission} from "./Submission";
import {NavLink} from "react-router-dom";
import ScrollArrow from "./BackToTop";
import {debounce} from "lodash";
import {FiltersContainer, Loader, MessageBoard, Navbar, SearchBar} from "./styles";
import TakoVideos from "./TakoVideos";
// import MessageBoard from "./MessageBoard";

// Limit of items to be loaded per time
const LIMIT = 10;

const VideoBoardContainer = ({mode}: {mode:string}): JSX.Element => {
  const [sourceData, setSourceData] = useState([] );
  const [data, setData] = useState([] );
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/video.json`
      );
      const data = await response?.json();
      const key = mode == 'moments' ? 'moment' : 'wah'
      data.forEach((row) => {
        let link = row[key]
        if(link.includes('http') && !link.includes('clip')){

          const {video_id, timestamp} =  /(?:\/|v=)(?<video_id>[a-z_0-9-]{6,16}).*?(?:t=(?<timestamp>\d+))?.*$/gmi
            .exec(link)
            ?.groups ?? {video_id:'', timestamp: ''}
          if(!video_id ) console.log(link)
          link = `https://www.youtube.com/embed/${video_id}?start${timestamp}`

        }
        if (mode == 'wah') {
          row.sub = row.wah_sub
          row.message = ''
        }


        row.image = link
      })



      setSourceData(data);

      const rows = data.slice(offset, LIMIT);


      setData(rows);

      setOffset(LIMIT + offset);
    };
    getData();
  }, []);

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
        const rows = sourceData.slice(offset, LIMIT);
        setHasMore(true);


        setData(rows);
        setOffset(offset + LIMIT);
      }
    },
    1000
  );


  return (
    <div>
      <Navbar>
        <NavLink exact to="/">
        <i className="fa fa-angle-left" /> {mode == 'moments' ? `Moments`: 'WAH'}
        </NavLink>
      </Navbar>
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
    </div>
  );
};

export default VideoBoardContainer;
