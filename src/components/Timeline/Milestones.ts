import { Milestone } from "./Milestone";
import milestoneJson from "../../static/Ina Anniversary Milestones.json";

type csvBool = "TRUE" | "FALSE";

const sanitizeMilestones = (milestones = milestoneJson): Milestone[] => {
  const toBool = (string: csvBool): boolean => string === "TRUE";
  const formatDate = (string: string) => {
    // eslint-disable-next-line prefer-const
    let [month, day, year] = string.split(/\W/);
    month = month.length < 2 ? "0" + month : month;

    return [day, month, year].join("·");
  };
  return milestones.map((jmilestone) => {
    return {
      label: jmilestone.label,
      media: jmilestone.media,
      date: formatDate(jmilestone.date), // i may be dumb
      longText: jmilestone.longText,
      major: toBool(jmilestone.major as csvBool),
      tags: {
        milestone: toBool(jmilestone.milestone as csvBool),
        important: toBool(jmilestone.important as csvBool),
        drawing: toBool(jmilestone.drawing as csvBool),
        collab: toBool(jmilestone.collab as csvBool),
      },
      video: jmilestone.video,
    };
  });
};

export const milestones: Milestone[] = sanitizeMilestones();
