import React from "react";

import { Layout, SEO } from "../components";
import {
  Link,
  Stack,
  StatLabel,
  StatNumber,
  Stat,
  StatHelpText,
  Divider
} from "@chakra-ui/core";

interface AwardData {
  rank: number;
  awards: string[];
  date: string;
  title: string;
  link?: string;
  project?: string;
}
const awards: AwardData[] = [
  {
    rank: 1,
    awards: ["Champion"],
    date: "11/01/2019",
    title:
      "Chengdu80 2019 - Inter-university fintech competition in Chengdu, China",
    project: "/work/dragonsearch"
  },
  {
    rank: 1,
    awards: ["Champion"],
    date: "05/01/2018",
    title: "PolyU x Radica BigDatathon 2018",
    link: "https://www.datavalleyhk.com/bigdatathon"
  },
  {
    rank: 1,
    awards: ["Champion"],
    date: "11/01/2017",
    title: "SCB (Shanghai Commercial Bank) Regional Finals in Hong Kong"
  },
  {
    rank: 2,
    awards: ["Runner-up", "Best Presentation"],
    date: "06/01/2019",
    title: "BEA 100 Fintech Challenge",
    link: "https://www.hkbea.com/bea100fc/",
    project: "https://github.com/piy0999/Unicorns-First"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "04/01/2019",
    title: "The Innovator Tribank Fintech Challenge 2019",
    link: "https://www.shacombank.com.hk/eng/main/fintech/2019/index.jsp",
    project: "https://github.com/piy0999/Unicorns-First"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "11/01/2018",
    title: "Chengdu80 2018",
    link: "https://www.cs.hku.hk/news/display.jsp?file=2018/1109_Chengdu80.htm",
    project: "/work/pipo"
  },
  {
    rank: 2,
    awards: ["Runner-up", "Most Innovative Award"],
    date: "05/01/2018",
    title: "Imagine Cup Hong Kong Finals",
    link: "https://www.facebook.com/msphongkong/posts/1028750247300048",
    project: "/work/creditsense"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "03/01/2018",
    title: "HKU Global Challenges, Local Solutions 2018",
    link:
      "https://www.sustainability.hku.hk/event/global-challenges-local-solutions-changing-lives-for-good"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "12/01/2017",
    title: "SCB (Shanghai Commercial Bank) Greater China Fintech Competition"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "12/01/2017",
    title: "HSBC Safeguard App Competition"
  },
  {
    rank: 3,
    awards: ["3rd Place"],
    date: "08/01/2017",
    title: "//oneweek (Microsoft Internal Hackathon)",
    project: "/work/metis"
  },
  {
    rank: 4,
    awards: ["Incubated"],
    date: "03/01/2019",
    title: "iDendron | HKU Innovation & Entrepreneurship Hub",
    link: "https://idendron.hku.hk/",
    project: "http://takedailydose.com/"
  },
  {
    rank: 1,
    awards: ["HK$100,000 Seed Fund"],
    date: "05/01/2018",
    title: "CCMF (Cyberbort Creative Micro Fund)",
    link:
      "https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund",
    project: "/work/creditsense"
  }
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
  "December"
];

const formatDate = (date: string): string =>
  `${MONTH_NAMES[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;

const Award: React.FunctionComponent<AwardData> = ({
  title,
  link,
  project,
  date,
  awards
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

const Awards = () => (
  <Layout>
    <SEO title="Awards" />
    <Stack>
      {awards
        .sort(
          (a, b) =>
            a.rank - b.rank ||
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((award, key) => (
          <>
            <Award key={key} {...award} />
            {key < awards.length - 1 && <Divider />}
          </>
        ))}
    </Stack>
  </Layout>
);

export default Awards;
