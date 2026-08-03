import { motion } from "framer-motion";

export default function Rabbit() {
  return (
    <motion.svg
      width="46" height="40" viewBox="0 0 46 40"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "absolute", left: -60, top: -20 }}
    >
      {/* ears */}
      <path d="M14 14 Q10 -2 18 6" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M22 14 Q22 -4 28 4" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="22" cy="26" rx="16" ry="12" fill="#FFFFFF" stroke="var(--color-ink)" strokeWidth="2" />
      {/* head */}
      <circle cx="18" cy="16" r="8" fill="#FFFFFF" stroke="var(--color-ink)" strokeWidth="2" />
      {/* eye */}
      <circle cx="16" cy="15" r="1.2" fill="var(--color-ink)" />
      {/* tail */}
      <circle cx="38" cy="28" r="4" fill="#FFFFFF" stroke="var(--color-ink)" strokeWidth="1.5" />
    </motion.svg>
  );
}