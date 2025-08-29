import { Milestone } from "./Milestone";
import milestoneJson from "../../static/Ina Anniversary Milestones.json";

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
      date: formatDate(jmilestone.date), // i may be dumb
      longText: jmilestone.longText,
      major: jmilestone.major,
      tags: {
        important: jmilestone.important,
        gaming: jmilestone.gaming,
        drawing: jmilestone.drawing,
        collab: jmilestone.collab,
      },
      video: jmilestone.video.replace(
        /.*\?v=(.+)$/,
        `https://www.youtube.com/embed/$1`
      ),
    };
  });
};

export const milestones: Milestone[] = sanitizeMilestones();
