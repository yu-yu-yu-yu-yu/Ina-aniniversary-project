import React, {useLayoutEffect} from "react";
import {Submission} from "../../../types";
import Masonry from "react-masonry-component";
import {TakoIcon} from "./TakoIcon";
import {
  IFrame,
  MessageCard,
  MessageCardHeader,
  MessageText,
  SubmissionContainer,
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
          <MessageCard>
            <MessageCardHeader>
              <TakoIcon id={icon} pun={pun} index={i} />
              {user || "Anonymous Tako"}
            </MessageCardHeader>
            <div style={{ padding: "0.75rem" }}>
              {image.includes("http") ? (
                <IFrame
                  width="100%"
                  height="315"
                  src={image}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
              ) : (<><MessageText>{image}</MessageText><hr /></>)}
              {sub && (<><MessageText>{sub}</MessageText><hr /></>)}
              <MessageText>{message}</MessageText>
            </div>
          </MessageCard>
        </SubmissionContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
