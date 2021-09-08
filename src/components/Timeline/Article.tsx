import React, {useState} from "react";
import {Milestone} from "./Milestone";
import {groupBy} from "lodash";
import {
  Column,
  EventLabel,
  EventMediaContainer,
  EventText,
  NewsPaperContainer,
  Row,
  SectionButton,
  SectionContainer,
} from "./styles/Article";

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

const BigEvent = ({ event }: { event: Milestone }) => {
  return (
    <Column>
      <Header event={event} />
      <Row>
        <EventText>{event.longText}</EventText>
      </Row>
      <EventMedia media={event.media} big />
    </Column>
  );
};

const Separator = ({ img = "InaLogo.png" }: { img?: string }) => {
  return (
    <Row center>
      <EventMedia media={img} big />
    </Row>
  );
};

const Header = ({ event: { anchor, label } }: { event: Milestone }) => {
  return (
    <Row center>
      <EventLabel>{anchor || label}</EventLabel>
    </Row>
  );
};

const SectionSelection = ({
  sections,
  selected,
  setSelected,
}: {
  sections: string[];
  selected: string;
  setSelected: (selected: string) => void;
}) => {
  return (
    <SectionContainer>
      {sections.map((section) => (
        <SectionButton
          key={section}
          onClick={() => setSelected(section)}
          selected={section == selected}
        >
          {section}
        </SectionButton>
      ))}
    </SectionContainer>
  );
};

const Anchorhold = ({ milestones }: { milestones: Milestone[] }) => {
  const [collapsed, toggle] = useState(true);
  return null;
};

const ElementPicker = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const mix = [LeftDescriptionEvent, RightDescriptionEvent];
  let counter = 0;

  return (
    <>
      {milestones.map((milestone, index) => {
        if (milestone.major) {
          if (!index) {
            return <BigEvent key={milestone.date} event={milestone} />;
          }
          return (
            <>
              <Separator key={milestone.label} />
              <BigEvent key={milestone.label} event={milestone} />
            </>
          );
        }
        const Element = mix[counter++ % mix.length];
        // eslint-disable-next-line no-debugger
        // debugger;
        return <Element key={milestone.label} event={milestone} />;
      })}
    </>
  );
};

export const Article = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const event = milestones[0];
  const sections = groupBy(milestones, "section");
  const [selected, setSelected] = useState("fall");

  return (
    <Column>
      <Anchorhold milestones={sections[selected]} />
      <SectionSelection
        sections={Object.keys(sections)}
        selected={selected}
        setSelected={setSelected}
      />
      <NewsPaperContainer>
        <ElementPicker milestones={sections[selected]} />
        {/*<LeftDescriptionEvent event={event} />*/}
        {/*<RightDescriptionEvent event={event} />*/}

        {/*<Separator />*/}
        {/*<Header event={event} />*/}
        {/*<Header event={event} />*/}
        {/*<Header event={event} />*/}
        {/*<BigEvent event={event} />*/}
        {/*<Header event={event} />*/}
      </NewsPaperContainer>
    </Column>
  );
};
