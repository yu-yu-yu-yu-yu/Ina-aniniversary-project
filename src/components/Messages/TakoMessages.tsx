import React, {useLayoutEffect} from "react";
import {Submission} from "./Submission";
import Masonry from "react-masonry-component";
import {TakoIcon} from "./TakoIcon";
import {SRLWrapper} from "simple-react-lightbox";
import {
  BubbleHeader,
  BubbleImage,
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

const options = {
  settings: {
    disablePanzoom: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const TakoMessages = ({
  submissions,
  isToggledOnlyImg,
  isToggledTextOnly,
}: TakoMessagesProps): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isToggledOnlyImg) {
    submissions = submissions.filter((sub) => {
      return sub.image;
    });
  }

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
      {submissions.map(({ message, user, icon, image, pun }, i) => (
        <SubmissionContainer key={i}>
          <TextBubbleContainer>
            <BubbleHeader>

                <TakoIcon id={icon} pun={pun} index={i} />

              <HeaderText>{user || "Anonymous Tako"}:</HeaderText>
            </BubbleHeader>
            <hr />

            {!isToggledTextOnly &&
              image &&
              (!image.includes("youtube") ? (
                <SRLWrapper options={options}>
                  {image.includes("mp4") ?

                    <video width={420} controls>
                        <source src={process.env.PUBLIC_URL + "/Images/" + image} type="video/mp4"/>
                    </video>

                  : <BubbleImage
                    src={process.env.PUBLIC_URL + "/Images/" + image}
                  />
                  }
                </SRLWrapper>
              ) : (
                <IFrame
                  width="100%"
                  height="315"
                  src={image}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></IFrame>
              ))}
            {(!isToggledOnlyImg  || image.includes("mp4")) && <BubbleMessage>{message}</BubbleMessage>}
          </TextBubbleContainer>
        </SubmissionContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
