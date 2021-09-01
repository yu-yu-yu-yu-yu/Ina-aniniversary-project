import React from "react";
import { Milestone } from "./Milestone";
import styled from "styled-components";

const Row = styled.div<{ big?: boolean }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: ${({ big }) => (big ? "100%" : "initial")};
  > *:first-child {
    margin-right: 5em;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const EventText = styled.p`
  font-size: 1.25vw;
  line-height: 2vw;
  //margin: 0 2em;
  text-align: justify;
`;

const EventLabel = styled.h1`
  text-align: center;
  padding: 0 2em;
`;

const EventMediaContainer = styled.div<{
  media: Milestone["media"];
}>`
  background: url(${(props) => process.env.PUBLIC_URL + "/" + props.media})
    center;
  flex: 1;
`;

const NewsPaperContainer = styled.div`
  //overflow: scroll;
  > ${Row} {
    padding: 2vw 5em;
  }
  img {
    max-width: 100%;
  }
`;

const EventMedia = ({
  media,
  big = false,
}: {
  media: Milestone["media"];
  big?: boolean;
}): JSX.Element | null => {
  if (!media) return null;
  //We're only expecting local files or YT links
  if (media.startsWith("http"))
    return (
      <iframe
        width="100%"
        src={media}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    );

  if (big)
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "/" + media} />
      </div>
    );
  return <EventMediaContainer media={media} />;
};
const LeftDescriptionEvent = ({
  event: { label, longText, media },
}: {
  event: Milestone;
}) => {
  return (
    <Row>
      <EventMedia media={media} />
      <Column>
        <EventLabel>{label}</EventLabel>
        <EventText>{longText}</EventText>
      </Column>
    </Row>
  );
};

const RightDescriptionEvent = ({
  event: { label, longText, media },
}: {
  event: Milestone;
}) => {
  return (
    <Row>
      <Column>
        <EventLabel>{label}</EventLabel>
        <EventText>{longText}</EventText>
      </Column>
      <EventMedia media={media} />
    </Row>
  );
};

const BigEvent = ({ event: { media } }: { event: Milestone }) => {
  return (
    <Row>
      <EventMedia media={media} big />
    </Row>
  );
};

const Separator = ({ img = "InaLogo.png" }: { img: string | undefined }) => {
  return <div></div>;
};

const Header = ({ event }: { event: Milestone }) => {
  return <div></div>;
};

const WideEvent = ({ event }: { event: Milestone }) => {
  return <div></div>;
};

const BigImage = ({ event }: { event: Milestone }) => {
  return <div></div>;
};

const BigText = ({ event }: { event: Milestone }) => {
  return <div></div>;
};

export const Article = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const event = milestones[0];
  return (
    <NewsPaperContainer>
      <LeftDescriptionEvent event={event} />
      <RightDescriptionEvent event={event} />
      <BigEvent event={event} />
      <BigImage event={event} />
      <BigText event={event} />

      <Separator img={event.media} />
      <Header event={event} />
      <WideEvent event={event} />
    </NewsPaperContainer>
  );
};
