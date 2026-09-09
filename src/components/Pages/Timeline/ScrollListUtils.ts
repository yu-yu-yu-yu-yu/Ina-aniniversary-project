import { upperCase, zipObject } from "lodash";
import { Milestone, Tags } from "../../../types/timeline";
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

export const filterMilestones = (
  selectedTags: Tags,
  milestones: Milestone[],
  searchString: string,
) => {
  const isAnyTag = Object.values(selectedTags).reduce(
    (acc, val) => acc || val,
    false,
  );

  return milestones.filter(({ tags, label }) => {
    const searchCondition = upperCase(label).includes(upperCase(searchString));
    let tagCondition = !isAnyTag;
    for (const tag in tags) {
      tagCondition =
        tagCondition ||
        (tags[tag as keyof Tags] && selectedTags[tag as keyof Tags]);
    }
    return searchCondition && tagCondition;
  });
};

export const getMediaLink = (src: Milestone["media"]) => {
  const isUrl = src?.startsWith("http");
  return isUrl ? src : `process.env.PUBLIC_URL/${src}`;
};

export const monthsWithYears = years.flatMap((year) =>
  months.map((month) => `${year}_${month}`),
);

export const tagColors = {
  highlight: "var(--light-highlight)",
  important: "#FFD700",
  gaming: "#3B7BFF",
  drawing: "#A259E6",
  collab: "#00E6E6",
  song: "#FF69B4",
};

export function getMilestoneOutline(tags: {
  highlight?: boolean;
  important?: boolean;
  gaming?: boolean;
  drawing?: boolean;
  collab?: boolean;
  song?: boolean;
}): string {
  const activeColors = Object.entries(tags)
    .filter(([, v]) => v === true)
    .map(([k]) => tagColors[k as keyof typeof tagColors]);
  if (activeColors.length === 0) return "transparent";
  if (activeColors.length === 1) return activeColors[0];
  return `linear-gradient(135deg, ${activeColors.join(", ")})`;
}

export const genericTakoIcons = [
  "8-bit Tako.png",
  "Hollow Tako.png",
  "Ikadachi.png",
  "Mori Tako.png",
  "Robodachi.png",
  "Tako Amelia (Takoson).png",
  "Tako Gura (Chum Tako).png",
  "Tako Ina.png",
  "Tako Kiara (Tako Bell).png",
  "Tako Ross.png",
  "Takodachi.png",
  "Takomfy.png",
  "Tophat Tako.png",
  "Violet Tako.png",
  "Wonder Tako.png",
  "Yuul B. Tako.png",
];

export function getTakoAvatar(
  author: string | null,
  index: number = 0,
): string {
  if (author && author.trim() !== "") {
    const fileName = `${author.replace(/ /g, "")}.png`;
    return `${process.env.PUBLIC_URL}/takoswentries/${fileName}`;
  }
  const icon = genericTakoIcons[index % genericTakoIcons.length];
  return `${process.env.PUBLIC_URL}/icon/${icon}`;
}

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
