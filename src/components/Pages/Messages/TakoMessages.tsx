import React, { useEffect, useMemo } from "react";
import {Submission} from "../../../types";
import Masonry from "react-masonry-component";
import {TakoIcon} from "./TakoIcon";
import {SRLWrapper} from "simple-react-lightbox";
import {
  BubbleImage,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleSubmissions = useMemo(
    () => {
      let filtered = submissions;
      if (isToggledOnlyImg) {
        filtered = filtered.filter((sub) => sub.image);
      }
      if (isToggledTextOnly) {
        filtered = filtered.filter((sub) => sub.message);
      }
      return filtered;
    },
    [submissions, isToggledOnlyImg, isToggledTextOnly],
  );

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
      {visibleSubmissions.map(({ message, user, icon, image, pun, event_date }, i) => (
        <SubmissionContainer key={i}>
          <MessageCard>
            <MessageCardHeader>
              <TakoIcon id={icon} pun={pun} index={i} />
              {user || "Anonymous Tako"}
            </MessageCardHeader>
            <div style={{ padding: "0.75rem" }}>
              {!isToggledTextOnly &&
                image &&
                (!image.includes("youtube") ? (
                  <SRLWrapper options={options}>
                    {image.includes("mp4") ?
                      <video width={420} controls>
                        <source src={process.env.PUBLIC_URL + "/artworks/" + image} type="video/mp4"/>
                      </video>
                    : <BubbleImage
                        src={process.env.PUBLIC_URL + "/artworks/" + image}
                        loading="lazy"
                        decoding="async"
                      />
                    }
                  </SRLWrapper>
                ) : (
                  <IFrame
                    width="100%"
                    height="315"
                    src={`${image}${image.includes("?") ? "&" : "?"}enablejsapi=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  />
                ))}
              {(!isToggledOnlyImg || image.includes("mp4")) && <MessageText>{message}</MessageText>}
              {event_date && (
                <div style={{ textAlign: "right", fontSize: "0.75rem", opacity: 0.6, marginTop: "0.4rem", paddingRight: "0.5rem" }}>
                  {event_date}
                </div>
              )}
            </div>
          </MessageCard>
        </SubmissionContainer>
      ))}
    </Masonry>
  );
};

export default TakoMessages;
