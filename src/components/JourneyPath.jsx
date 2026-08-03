import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import WalkingFigure from "./WalkingFigure";
import ProjectCard from "./ProjectCard";
import PathFlag from "./PathFlag";
import InfoPanel from "./InfoPanel";
import ScrollHint from "./ScrollHint";
import Decorations from "./Decorations";
import CityBackground from "./CityBackground";
import Rabbit from "./Rabbit";

const PROJECT_START = 450;
const PROJECT_GAP = 600;
const EXTRA_END_SPACE = 700;

const FIGURE_LEFT_PERCENT = 18;
const VERTICAL_POSITION_PERCENT = 78;

const HOLD_RADIUS = 90;

export default function JourneyPath({ milestones = [] }) {
  const containerRef = useRef(null);

  const [frameIndex, setFrameIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Compute characterX ONCE after mount, not on every render.
  // This avoids first-paint/refresh inconsistency from window.innerWidth
  // shifting slightly before layout fully settles.
  const [characterX, setCharacterX] = useState(200);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      setCharacterX(window.innerWidth * (FIGURE_LEFT_PERCENT / 100));
      setReady(true);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const positionedMilestones = useMemo(() => {
    const positioned = milestones.map((m, i) => ({
      ...m,
      x: PROJECT_START + i * PROJECT_GAP,
    }));

    const closingX =
      positioned.length > 0
        ? positioned[positioned.length - 1].x + PROJECT_GAP
        : PROJECT_START;

    positioned.push({
      type: "closing",
      title: "Still walking. Let's talk?",
      x: closingX,
    });

    return positioned;
  }, [milestones]);

  const PATH_WIDTH =
    positionedMilestones.length > 0
      ? positionedMilestones[positionedMilestones.length - 1].x + EXTRA_END_SPACE
      : 1000;

  const SCROLL_SCREENS = Math.max(milestones.length * 2, 4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(PATH_WIDTH - characterX - 300, 0);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      let foundIndex = null;

      for (let i = 0; i < positionedMilestones.length; i++) {
        const screenPosition = positionedMilestones[i].x + latestX;

        if (Math.abs(screenPosition - characterX) < HOLD_RADIUS) {
          foundIndex = i;
          break;
        }
      }

      setActiveIndex(foundIndex);
    });

    return () => unsubscribe();
  }, [x, positionedMilestones, characterX]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setFrameIndex(Math.floor(latest * 140) % 5);
      if (latest > 0.01) {
        setShowHint(false);
      } else {
        setShowHint(true);
      }
    });
  }, [scrollYProgress]);

  const isPaused = activeIndex !== null;

  // Don't render position-dependent content until characterX is confirmed
  if (!ready) {
    return (
      <div
        ref={containerRef}
        style={{ height: `${SCROLL_SCREENS * 100}vh`, position: "relative" }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: `${SCROLL_SCREENS * 100}vh`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <CityBackground scrollX={x} />
        <Decorations scrollX={x} />

        <motion.div
          style={{
            position: "absolute",
            top: `${VERTICAL_POSITION_PERCENT}%`,
            left: 0,
            width: PATH_WIDTH,
            x,
          }}
        >
          <svg width={PATH_WIDTH} height="4" style={{ position: "absolute", top: 0 }}>
            <motion.line
              x1="0"
              y1="2"
              x2={PATH_WIDTH}
              y2="2"
              stroke="var(--color-ink)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            style={{ position: "absolute", left: 20, top: -70 }}
          >
            <PathFlag label="Start" color="var(--color-accent-green)" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            style={{ position: "absolute", left: 20, top: -70 }}
          >
            <Rabbit />
          </motion.div>

          {positionedMilestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.6 + i * 0.15 }}
              style={{
                position: "absolute",
                left: m.x,
                top: -14,
                width: 170,
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              <div
                className="cursor-pointer-hand"
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background:
                    activeIndex === i
                      ? "var(--color-accent-red)"
                      : "var(--color-accent-blue)",
                  margin: "0 auto 8px",
                  transition: "background 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              <span className="font-hand text-lg">{m.title}</span>

              <AnimatePresence>
                {activeIndex === i && <ProjectCard data={m} />}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            style={{ position: "absolute", left: PATH_WIDTH - 60, top: -70 }}
          >
            <PathFlag label="The End" color="var(--color-accent-red)" />
          </motion.div>
        </motion.div>

        <div
          style={{
            position: "absolute",
            top: `${VERTICAL_POSITION_PERCENT}%`,
            left: `${FIGURE_LEFT_PERCENT}%`,
            transform: "translate(-50%, -100%)",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              className="font-hand text-sm text-ink-light"
              style={{ display: "block", marginBottom: 4 }}
            >
              Who am I? (click me!)
            </motion.span>

            <WalkingFigure
              size={280}
              frameIndex={frameIndex}
              paused={isPaused}
              onClick={() => setInfoOpen(true)}
            />
          </motion.div>
        </div>

        <InfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />
        <ScrollHint visible={showHint} />
      </div>
    </div>
  );
}