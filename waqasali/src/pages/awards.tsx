import React from "react";

import { Layout, SEO } from "../components";
import { List, ListItem, Link } from "@chakra-ui/core";

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
    date: "November 2019",
    title:
      "Chengdu80 2019 - Inter-university fintech competition in Chengdu, China",
    project: "/work/dragonsearch"
  },
  {
    rank: 1,
    awards: ["Champion"],
    date: "May 2018",
    title: "PolyU x Radica BigDatathon 2018",
    link: "https://www.datavalleyhk.com/bigdatathon"
  },
  {
    rank: 1,
    awards: ["Champion"],
    date: "November 2017",
    title: "SCB (Shanghai Commercial Bank) Regional Finals in Hong Kong"
  },
  {
    rank: 2,
    awards: ["Runner-up Outstanding Team", "Best Presentation Team"],
    date: "June 2019",
    title: "BEA 100 Fintech Challenge",
    link: "https://www.hkbea.com/bea100fc/",
    project: "https://github.com/piy0999/Unicorns-First"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "April 2019",
    title: "The Innovator Tribank Fintech Challenge 2019",
    link: "https://www.shacombank.com.hk/eng/main/fintech/2019/index.jsp",
    project: "https://github.com/piy0999/Unicorns-First"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "November 2018",
    title: "Chengdu80 2018",
    link: "https://www.cs.hku.hk/news/display.jsp?file=2018/1109_Chengdu80.htm",
    project: "/work/pipo"
  },
  {
    rank: 2,
    awards: ["Runner-up", "Most Innovative Award"],
    date: "May 2018",
    title: "Imagine Cup Hong Kong Finals",
    link: "https://www.facebook.com/msphongkong/posts/1028750247300048",
    project: "/work/creditsense"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "March 2018",
    title: "HKU Global Challenges, Local Solutions 2018",
    link:
      "https://www.sustainability.hku.hk/event/global-challenges-local-solutions-changing-lives-for-good"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "December 2017",
    title: "SCB (Shanghai Commercial Bank) Greater China Fintech Competition"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "December 2017",
    title: "HSBC Safeguard App Competition"
  },
  {
    rank: 3,
    awards: ["3rd Place"],
    date: "August 2017",
    title: "//oneweek (Microsoft Internal Hackathon)",
    project: "/work/metis"
  },
  {
    rank: 4,
    awards: ["Incubated"],
    date: "March 2019",
    title: "iDendron | HKU Innovation & Entrepreneurship Hub",
    link: "https://idendron.hku.hk/",
    project: "http://takedailydose.com/"
  },
  {
    rank: 1,
    awards: ["HKD$ 100,000 Seed Fund"],
    date: "May 2018",
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
    <ListItem>
      <span>{formatDate(date)} - </span>
      {link ? <Link href={link}>{title}</Link> : title}
      {project && <Link href={project}> - Project</Link>}
      <span> - {awards.join(", ")}</span>
    </ListItem>
  );
};

const Awards = () => (
  <Layout>
    <SEO title="Awards" />
    <List>
      {awards
        .sort(
          (a, b) =>
            a.rank - b.rank ||
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((award, key) => (
          <Award key={key} {...award} />
        ))}
    </List>
  </Layout>
);

export default Awards;
