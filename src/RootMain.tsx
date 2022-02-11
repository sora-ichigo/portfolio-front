import React, { useCallback, useRef, useState } from "react";
import type CoreSwiper from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { END_PAGE, MainPageType } from "./common/utils/mainPages";
import { Header } from "./header/components/Header";
import { SwiperOverlay } from "./common/components/SwiperOverlay";
import { Resume } from "./resume/components/Resume";
import { Portfolio } from "./portfolio/components/Portfolio";
import { About } from "./about/components/About";

const swiperGeneralProps: SwiperProps = {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  speed: 500,
  centeredSlides: true,
};

export const RootMain: React.FC<{ pageType: MainPageType }> = ({
  pageType,
}) => {
  const [swiper, setSwiper] = useState<CoreSwiper | undefined>(undefined);
  const [tabSwiper, setTabSwiper] = useState<CoreSwiper | undefined>(undefined);

  const slideStatus = useRef<{ prev: number; current: number }>({
    prev: 0,
    current: 0,
  });

  const onMainSlideChange = (swiper: CoreSwiper) => {
    slideStatus.current = {
      prev: slideStatus.current.current,
      current: swiper.realIndex,
    };
    const op = checkSlideMove(slideStatus.current);
    tabSlideMove(op, tabSwiper);
  };

  const moveSlide = (isNext: boolean, isPrev: boolean) => {
    isNext ? swiper?.slideNext() : isPrev ? swiper?.slidePrev() : null;
  };

  return (
    <>
      <Header
        swiperGeneralProps={swiperGeneralProps}
        pageType={pageType}
        setTabSwiper={setTabSwiper}
        moveSlide={moveSlide}
      />
      <Swiper
        {...swiperGeneralProps}
        initialSlide={pageType}
        onInit={(swiper: CoreSwiper) => setSwiper(swiper)}
        onSlideChange={onMainSlideChange}
        className="pt-3"
      >
        <SwiperSlide style={{ width: "85%" }}>
          {(props) => (
            <>
              <SwiperOverlay {...props} moveSlide={moveSlide} />
              <About />
            </>
          )}
        </SwiperSlide>

        <SwiperSlide style={{ width: "85%" }}>
          {(props) => (
            <>
              <SwiperOverlay {...props} moveSlide={moveSlide} />
              <Resume />
            </>
          )}
        </SwiperSlide>

        <SwiperSlide style={{ width: "85%" }}>
          {(props) => (
            <>
              <SwiperOverlay {...props} moveSlide={moveSlide} />
              <Portfolio />
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

// どの方向にスライドが動いたか
const checkSlideMove: (status: {
  prev: number;
  current: number;
}) => "NOOP" | "NEXT" | "PREV" = ({ prev, current }) => {
  if (prev === current) {
    return "NOOP";
  }

  if (current === 0 && prev === END_PAGE) {
    return "NEXT";
  }

  if (current === END_PAGE && prev === 0) {
    return "PREV";
  }

  if (current > prev) {
    return "NEXT";
  } else {
    return "PREV";
  }
};

const tabSlideMove = (op: "NOOP" | "NEXT" | "PREV", tabSwiper?: CoreSwiper) => {
  switch (op) {
    case "NEXT":
      tabSwiper?.slideNext();
      break;
    case "PREV":
      tabSwiper?.slidePrev();
      break;
    default:
    // noop
  }
};
