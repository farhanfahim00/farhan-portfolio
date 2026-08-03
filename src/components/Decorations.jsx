import { motion, useTransform } from "framer-motion";
import cloud1 from "../assets/decorations/cloud1.png";
import cloud2 from "../assets/decorations/cloud2.png";
import cloud3 from "../assets/decorations/cloud3.png";

const cloudPlacements = [
  { img: cloud1, left: 320, top: 40, width: 220, opacity: 0.85 },
  { img: cloud2, left: 750, top: 30, width: 170, opacity: 0.7 },
  { img: cloud3, left: 1400, top: -30, width: 250, opacity: 0.8 },
  { img: cloud1, left: 2100, top: 20, width: 180, opacity: 0.75 },
  { img: cloud2, left: 2800, top: -10, width: 230, opacity: 0.85 },
  { img: cloud3, left: 3500, top: 15, width: 190, opacity: 0.7 },
  { img: cloud1, left: 4200, top: -25, width: 210, opacity: 0.8 },
];

export default function Decorations({ scrollX }) {
  const cloudX = useTransform(scrollX, (v) => v * 0.18);

  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top: "8%",
          left: 0,
          width: 5000,
          x: cloudX,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {cloudPlacements.map((c, i) => (
          <img
            key={i}
            src={c.img}
            alt=""
            style={{
              position: "absolute",
              left: c.left,
              top: c.top,
              width: c.width,
              opacity: c.opacity,
            }}
          />
        ))}
      </motion.div>

      <div style={{ position: "fixed", top: "18%", left: 0, width: "100%", zIndex: 2, pointerEvents: "none" }}>
        <motion.svg
          width="34" height="20" viewBox="0 0 34 20"
          initial={{ x: -50 }}
          animate={{ x: "110vw" }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0 }}
          style={{ position: "absolute" }}
        >
          <path d="M2 10 Q9 0 17 10 Q25 0 32 10" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.svg>
        <motion.svg
          width="24" height="14" viewBox="0 0 34 20"
          initial={{ x: -50 }}
          animate={{ x: "110vw" }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear", delay: 6 }}
          style={{ position: "absolute", top: 30 }}
        >
          <path d="M2 10 Q9 0 17 10 Q25 0 32 10" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.svg>
      </div>
    </>
  );
}