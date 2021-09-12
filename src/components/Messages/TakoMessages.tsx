import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { Submission } from "./Submission";
import Masonry from "react-masonry-component";
import { TakoIcon } from "./TakoIcon";
import { SRLWrapper } from "simple-react-lightbox";

const SubmissionContainer = styled.div`
  margin: 10px;
  width: 450px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const TextBubbleContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  padding: 15px;
  border: 3px solid var(--inai-purple);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #a198b3;
  border-radius: 15px;
  opacity: 1;
`;

// const TextBubbleBottom = styled.div`
//     content: "";
//     width: 0px;
//     height: 0px;
//     position: absolute;
//     border-left: 24px solid #fff;
//     border-right: 12px solid transparent;
//     border-top: 12px solid #fff;
//     border-bottom: 20px solid transparent;
//     left: 50%;
//     bottom: -17px;
//     // border-color: purple;
// `;

const BubbleMessage = styled.div`
  padding-top: 5px;
  overflow-wrap: break-word;
  color: var(--ika-purple);
  text-align: left;
  font: normal normal 300 20px/25px Mulish;
  letter-spacing: 0px;
  opacity: 1;
`;

const BubbleImage = styled.img`
  border: 2px solid var(--inai-purple);
  border: 2px solid #a198b3;
  border-radius: 23px;
  opacity: 1;
  max-width: 400px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BubbleHeader = styled.div`
  color: var(--ina-orange);
  text-align: left;

  font: normal normal 600 30px/40px Montserrat;

  @media only screen and (max-width: 768px) {
    font: normal normal 600 24px/30px Montserrat;
  }

  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderText = styled.div`
  overflow-wrap: break-word;
`;

const TakoImgContainer = styled.div`
  display: flex;
`;

const IFrame = styled.iframe`
  border: 2px solid var(--inai-purple);
  border: 2px solid #a198b3;
  border-radius: 23px;
  opacity: 1;
`;

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
      {submissions.map(({ message, user, icon, image }, i) => (
        <SubmissionContainer key={i}>
          <TextBubbleContainer>
            <BubbleHeader>
              <TakoImgContainer>
                <TakoIcon id={icon} />
              </TakoImgContainer>
              <HeaderText>{user != "" ? user : "Anonymous Tako"}:</HeaderText>
            </BubbleHeader>
            <hr />

            {!isToggledTextOnly &&
              image &&
              //Using ina pfp as placeholder.
              (!image.includes("youtube") ? (
                <SRLWrapper options={options}>
                  <BubbleImage
                    src={process.env.PUBLIC_URL + "/Images/" + image}
                  />
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
            {!isToggledOnlyImg && <BubbleMessage>{message}</BubbleMessage>}
            {/* <TextBubbleBottom/> */}
          </TextBubbleContainer>
        </SubmissionContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
