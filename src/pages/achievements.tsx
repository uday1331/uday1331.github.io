import React from "react";
import {
  Link,
  Stack,
  StatLabel,
  StatNumber,
  Stat,
  StatHelpText,
  Divider,
} from "@chakra-ui/core";

import { Layout, SEO } from "../components";

interface AchievementData {
  rank: number;
  awards: string[];
  date: string;
  title: string;
  link?: string;
  project?: string;
}
const awards: AchievementData[] = [
  {
    rank: 1,
    awards: ["Champion"],
    date: "11/01/2019",
    title:
      "Chengdu80 2019 - Inter-university fintech competition in Chengdu, China",
    link:
      "https://www.cs.hku.hk/news-events/news-and-announcements/20191104_Chengdu_2019",
    project: "/work/dragonsearch",
  },
];

const MONTH_NAMES = [
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
];

const formatDate = (date: string): string =>
  `${MONTH_NAMES[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;

const Achievement: React.FunctionComponent<AchievementData> = ({
  title,
  link,
  project,
  date,
  awards,
}) => {
  return (
    <Stat>
      <StatLabel>
        {formatDate(date)}
        {project && (
          <span>
            <span> - </span>
            <Link href={project}>See Project</Link>
          </span>
        )}
      </StatLabel>
      <StatNumber>{awards.join(", ")}</StatNumber>
      <StatHelpText>
        {link ? <Link href={link}>{title}</Link> : title}
      </StatHelpText>
    </Stat>
  );
};

const Achievements = () => (
  <Layout>
    <SEO title="Achievements" />
    <Stack>
      {awards
        .sort(
          (a, b) =>
            a.rank - b.rank ||
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((award, key) => (
          <>
            <Achievement key={key} {...award} />
            {key < awards.length - 1 && <Divider />}
          </>
        ))}
    </Stack>
  </Layout>
);

export default Achievements;
