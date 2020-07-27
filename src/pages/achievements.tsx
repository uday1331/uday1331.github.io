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
    awards: ["Runner-up", "Best Design"],
    date: "3/11/2019",
    title: "Fintech Week Hackathon - by WHub, DBS and HKECIC, Hong Kong",
    link:
      "https://medium.com/whub/highlight-from-the-fintech-week-hackathon-2019-75007b1f9992#:~:text=The%20FinTech%20Week%20Hackathon%202019%20by%20WHub%2C%20DBS%20and%20HKECIC,place%20between%201st%20%E2%80%94%203rd%20November.&text=On%20the%20evening%20of%201st,Kong%20at%20the%20Kerry%20Hotel",
    project: "/work/navis",
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
