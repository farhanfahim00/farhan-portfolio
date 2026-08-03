import { motion, AnimatePresence } from "framer-motion";

export default function ScrollHint({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 40,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-hand text-2xl">
              scroll to see my journey
            </span>
            <div style={{ fontSize: "22px", marginTop: 4 }}>&#8595;</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}