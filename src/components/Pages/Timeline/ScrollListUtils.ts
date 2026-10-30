import { zipObject } from "lodash";
import { Milestone } from "../../../types/timeline";
import milestoneJson from "../../../static/Ina Anniversary Milestones.json";
import timelineMessages from "../../../static/TimelineMessages.json";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
export const mappedMonths = zipObject(
  ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  months,
);

export const getDynamicYears = () => {
  const yearsSet = new Set<string>();
  milestoneJson.forEach((milestone: { date: string }) => {
    const parts = milestone.date.split(/\W/);
    const year = parts[2];
    if (year) yearsSet.add(year);
  });
  return Array.from(yearsSet).sort();
};

export const years = getDynamicYears() as unknown as readonly string[];

export const getMediaLink = (src: Milestone["media"]) => {
  const isUrl = src?.startsWith("http");
  return isUrl ? src : `${process.env.PUBLIC_URL}/${src}`;
};

export const tagColors = {
  highlight: "var(--light-highlight)",
  important: "#FFD700",
  gaming: "#3B7BFF",
  drawing: "#A259E6",
  collab: "#00E6E6",
  song: "#FF69B4",
};

export function getUniqueTitleTags(milestones: Milestone[]): string[] {
  const tags = new Set<string>();
  milestones.forEach((m) => {
    const match = m.label.match(/【([^】]+)】/);
    if (match) tags.add(match[1]);
  });
  return Array.from(tags);
}

type TimelineMessageEntry = {
  label: string;
  tako1?: string;
  takoMessage1?: string;
  tako2?: string;
  takoMessage2?: string;
  tako3?: string;
  takoMessage3?: string;
};

export function getMessagesForMilestone(milestone: Milestone) {
  const timelineEntry = (timelineMessages as TimelineMessageEntry[]).find(
    (msg) => msg.label === milestone.label,
  );
  const messages = [
    { type: "longText", text: milestone.longText, author: null },
    ...[1, 2, 3].map((i) => ({
      type: `takoMessage${i}`,
      text:
        timelineEntry?.[
          `takoMessage${i}` as `takoMessage1` | `takoMessage2` | `takoMessage3`
        ] || "",
      author:
        timelineEntry?.[`tako${i}` as `tako1` | `tako2` | `tako3`] || null,
    })),
  ].filter((msg) => msg.text && msg.text.trim() !== "");
  return messages;
}
