import React, {useLayoutEffect} from "react";
import {Submission} from "./Submission";
import Masonry from "react-masonry-component";
import {TakoIcon} from "./TakoIcon";
import {
  BubbleHeader,

  BubbleMessage,
  HeaderText,
  IFrame,
  SubmissionContainer,
  TextBubbleContainer
} from "./styles";


interface TakoMessagesProps {
  submissions: Submission[];
  isToggledOnlyImg: boolean;
  isToggledTextOnly: boolean;
}


const TakoMessages = ({
  submissions,
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
      {submissions.map(({ message, user, icon, image, pun,sub }, i) => (
        <SubmissionContainer key={i}>
          <TextBubbleContainer>
            <BubbleHeader>

              {<TakoIcon id={icon} pun={pun} index={i} />}

              <HeaderText>{user || "Anonymous Tako"}:</HeaderText>
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
                /> :  (<><BubbleMessage>{image}</BubbleMessage><hr/></>)
              )

            }
            {sub &&  (<><BubbleMessage>{sub}</BubbleMessage><hr/></>)}

            <BubbleMessage>{message}</BubbleMessage>
          </TextBubbleContainer>
        </SubmissionContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
