import React, { useRef, useState } from "react";
import styles from "./VidSection.module.css";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Pad from "../../media/videos/phases/1Pad.mp4";
import RoughPlumbing from "../../media/videos/phases/2RoughPlumbing.mp4";
import PostTension from "../../media/videos/phases/3PostTension.mp4";
import Termite from "../../media/videos/phases/4Termite.mp4";
import Slab from "../../media/videos/phases/5Slab.mp4";

export const FootingVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["32px", "16px", "16px"]
  );

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <motion.div className={styles.fixedHeaderContainer}>
          <motion.p
            className={styles.fixedHeader}
            style={{ fontSize: fontSize }}
          >
            Phase 1 - Foundation
          </motion.p>
        </motion.div>
        {SLIDES.map((s, idx) => (
          <Slide
            key={s.id}
            slide={s}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            numItems={s.ni}
          />
        ))}
      </div>
      {/* <div className={styles.screenBuffer} /> */}
    </>
  );
};

interface SlideProps {
  position: number;
  slide: SlideType;
  scrollYProgress: MotionValue;
  numItems: number;
}

const Slide = ({ position, slide, scrollYProgress, numItems }: SlideProps) => {
  const scaleFromPct = (position - 1) / SLIDES.length;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -SLIDE_HEIGHT]
  );

  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;
  const mid = (start + end) / 2;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      style={{
        height: SLIDE_HEIGHT,
        y: position === SLIDES.length ? undefined : y,
      }}
      className={styles.slideContainer}
    >
      <motion.div
        className={styles.slideVideoContainer}
        style={{ opacity, scale }}
      >
        <motion.video
          src={slide.video}
          muted
          autoPlay
          loop={true}
          className={styles.slideVideo}
          style={{
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        ></motion.video>
        <motion.div
          className={styles.slideTextContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.slideTitle}>{slide.title}</h3>
          <p className={styles.slideParagraph}>{slide.paragraph}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SLIDE_HEIGHT = 960;

type SlideType = {
  id: number;
  ni: number;
  title: string;
  paragraph: string;
  video: string;
};

const SLIDES: SlideType[] = [
  {
    id: 1,
    ni: 5,
    title: "Footings",
    paragraph:
      "The footing is the perimeter foundation and is the first step after the dirt pad is built. You'll notice rebar extending up from the footing - this rebar is tied into the slab concrete to anchor your home into the ground. ",
    video: `${Pad}`,
  },
  {
    id: 2,
    ni: 5,
    title: "Rough Plumbing",
    paragraph:
      "The plumbers first visit to the home is call the Rough Plumbing phase. This is when the drain pipes and water lines are run. Our team uses laser levels to ensure everything is properly installed. ",
    video: `${RoughPlumbing}`,
  },
  {
    id: 3,
    ni: 5,
    title: "Post-Tension Cables",
    paragraph:
      "Every Executive home features post-tension cables that are engineered precisely for each layout. The post-tension cables bind the concrete together and provide the home with incredible tensile strength. ",
    video: `${PostTension}`,
  },
  {
    id: 4,
    ni: 5,
    title: "Termite Treatment",
    paragraph:
      "A termite treatment will be applied before the slab is poured. The treatment comes with a 5-year warranty for extra peace of mind!",
    video: `${Termite}`,
  },
  {
    id: 5,
    ni: 5,
    title: "Slab",
    paragraph:
      "Once the internal systems are in place, the slab is backfilled and concrete is poured. Framing is up next!.",
    video: `${Slab}`,
  },
];