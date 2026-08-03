import { motion, useTransform } from "framer-motion";
import city1 from "../assets/decorations/city-1.png";

const cityPlacements = [
  { img: city1, left: 0, width: 1400 },
  { img: city1, left: 1350, width: 1400 },
  { img: city1, left: 2700, width: 1400 },
  { img: city1, left: 4050, width: 1400 },
  { img: city1, left: 5400, width: 1400 },
];

export default function CityBackground({ scrollX }) {
  // Slowest layer, sits furthest back, moves the least
  const cityX = useTransform(scrollX, (v) => v * 0.1);

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "60%",
        left: 0,
        width: 6800,
        x: cityX,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {cityPlacements.map((c, i) => (
        <img
          key={i}
          src={c.img}
          alt=""
          style={{
            position: "absolute",
            left: c.left,
            width: c.width,
            opacity: 0.55,
          }}
        />
      ))}
    </motion.div>
  );
}