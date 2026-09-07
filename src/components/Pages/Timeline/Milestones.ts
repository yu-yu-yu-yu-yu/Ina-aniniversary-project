import { Milestone } from "../../../types";
import milestoneJson from "../../../static/Ina Anniversary Milestones.json";
import { toEmbed } from "../../../utils/youtube";

const sanitizeMilestones = (milestones = milestoneJson): Milestone[] => {
  const formatDate = (string: string) => {
    // eslint-disable-next-line prefer-const
    let [month, day, year] = string.split(/\W/);
    month = month.length < 2 ? "0" + month : month;
    day = day.length < 2 ? "0" + day : day;
    return [day, month, year].join("·");
  };

  return milestones.map((jmilestone) => {
    return {
      label: jmilestone.label,
      media: jmilestone.media,
      date: formatDate(jmilestone.date),
      longText: jmilestone.longText,
      highlight: jmilestone.highlight,
      tags: {
        highlight: jmilestone.highlight,
        important: jmilestone.important,
        gaming: jmilestone.gaming,
        drawing: jmilestone.drawing,
        collab: jmilestone.collab,
        song: jmilestone.song,
      },
      video: jmilestone.video ? toEmbed(jmilestone.video) : "",
    };
  });
};

export const milestones: Milestone[] = sanitizeMilestones();
