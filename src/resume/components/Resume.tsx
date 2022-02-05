import React from "react";
import { FaSuperpowers } from "react-icons/fa";

import { Container } from "../../common/components/Container";
import { GlobalHeading } from "../../common/components/GlobalHeading";
import { HistoryList } from "./HistoryList";
import { HistoryListItemType } from "./HistoryListItem";

const historyDateList: HistoryListItemType[] = [
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
    current: true,
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
];

export const Resume: React.FC = () => (
  <Container>
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      {/* -------------------------
        HISTORY
        ------------------------- */}
      <HistoryList historyListProps={historyDateList} />

      {/* -------------------------
        SKILL etc...
        ------------------------- */}
      <div>
        <div className="my-3">
          <GlobalHeading icon={FaSuperpowers} text="Skills" />
        </div>
      </div>
    </div>
  </Container>
);
