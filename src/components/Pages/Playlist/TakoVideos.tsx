import React, {useLayoutEffect} from "react";
import {SongData} from "../../../types";
import Masonry from "react-masonry-component";
import {TakoIcon} from "./TakoIcon";
import {
  BubbleHeader,
  BubbleSong,
  HeaderText,
  IFrame,
  SongContainer,
  TextBubbleContainer
} from "./styles/styles";


interface TakoMessagesProps {
  SongDatas: SongData[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
}


const TakoMessages = ({
  SongDatas,
}: TakoMessagesProps): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Masonry
      options={{
        gutter: 40,
        columnWidth: 1,
        fitWidth: true,
        transitionDuration: 0,
      }}
      style={{ margin: "0 auto" }}
    >
      {SongDatas.map(({ message, user, icon, image, pun,sub }, i) => (
        <SongContainer key={i}>
          <TextBubbleContainer>
            <BubbleHeader>

              {<TakoIcon id={icon} pun={pun} index={i} />}

              <HeaderText>{user || "Anonymous Tako"}</HeaderText>
            </BubbleHeader>
            <hr />

            {

              (image.includes("http") ?
                <IFrame
                  width="100%"
                  height="315"
                  src={image}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                /> :  (<><BubbleSong>{image}</BubbleSong><hr/></>)
              )

            }
            {sub &&  (<><BubbleSong>{sub}</BubbleSong><hr/></>)}

            <BubbleSong>{message}</BubbleSong>
          </TextBubbleContainer>
        </SongContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
