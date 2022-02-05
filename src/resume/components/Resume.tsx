import React from "react";
import styled from "styled-components";
import { FaSuperpowers, FaFlask } from "react-icons/fa";
import { Container } from "../../common/components/Container";
import { GlobalHeading } from "../../common/components/GlobalHeading";

export const Resume: React.FC = () => (
  <Container>
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      {/* -------------------------
        HISTORY
        ------------------------- */}
      <div className="pl-28 pb-2">
        <h2 className="relative mb-9 text-2xl font-light tracking-widest">
          <WorkHistoryIcon>
            <FaFlask className="text-grey-4" />
          </WorkHistoryIcon>
          work history
        </h2>

        <div className="relative -z-10 mb-12 rounded-md border-3 border-grey-4 px-8 py-6">
          <HistoryArrow>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </HistoryArrow>

          <h3 className="text-base font-bold">Frontend Web Developer</h3>
          <h4 className="text-xs font-bold uppercase tracking-widest text-grey-2">
            PIXELWARS INC.
          </h4>
          <p className="text-md mt-3 tracking-wider">
            I currently work for Pixelwars creative studio. I create usable web
            interfaces, front end coding stuff and almost anything. But i love
            what i do.
          </p>
        </div>
      </div>

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

const WorkHistoryIcon = styled.div`
  font-size: 28px;
  position: absolute;
  top: -27px;
  left: -112px;
  width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #f4f6f7;
  border-radius: 50%;
`;

const HistoryArrow = styled.span`
  position: relative;
  position: absolute;
  top: 50%;
  right: 100%;
  width: 15px;
  height: 30px;
  .middle {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    height: 15px;
    border-right: solid #fff 3px;
  }
  .top {
    height: 50%;
    border-right: solid 3px #d0dadc;
    transform: rotate(50deg);
    transform-origin: 100% 0%;
  }
  .bottom {
    height: 50%;
    border-top: solid 3px #d0dadc;
    transform: rotate(40deg);
    transform-origin: 100% 0%;
  }
`;
