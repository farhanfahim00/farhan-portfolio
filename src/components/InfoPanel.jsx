import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoPanel({ open, onClose }) {
  const [tab, setTab] = useState("about");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              zIndex: 100,
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -1.5 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            style={{
              position: "fixed",
              top: "50%",
              left: "24px",
              transform: "translateY(-50%) rotate(-1.5deg)",
              width: 320,
              maxHeight: "80vh",
              overflowY: "auto",
              background: "#FFFFFF",
              border: "2px solid var(--color-ink)",
              borderRadius: "6px",
              padding: "24px 24px 26px",
              boxShadow: "5px 7px 0px rgba(0,0,0,0.18)",
              zIndex: 101,
            }}
          >
            <button
              onClick={onClose}
              className="font-hand"
              aria-label="Close"
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                fontSize: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-ink)",
              }}
            >
              Close
            </button>

            <h2 className="font-hand text-3xl" style={{ marginBottom: 4 }}>
  Farhan Fahim Taimoor
</h2>
<p
  className="font-body text-sm text-ink-light"
  style={{ marginBottom: 14, fontStyle: "italic" }}
>
  AI Student & Automation Engineer
</p>

            {/* Tabs */}
            <div
              style={{
                display: "flex",
                border: "2px solid var(--color-ink)",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: 16,
                width: "fit-content",
              }}
            >
              <button
                onClick={() => setTab("about")}
                className="font-hand"
                style={{
                  fontSize: "15px",
                  padding: "5px 16px",
                  background:
                    tab === "about"
                      ? "var(--color-ink)"
                      : "transparent",
                  color:
                    tab === "about"
                      ? "var(--color-paper)"
                      : "var(--color-ink)",
                  border: "none",
                  borderRight: "2px solid var(--color-ink)",
                  cursor: "pointer",
                }}
              >
                About
              </button>

              <button
                onClick={() => setTab("contact")}
                className="font-hand"
                style={{
                  fontSize: "15px",
                  padding: "5px 16px",
                  background:
                    tab === "contact"
                      ? "var(--color-ink)"
                      : "transparent",
                  color:
                    tab === "contact"
                      ? "var(--color-paper)"
                      : "var(--color-ink)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Contact
              </button>
            </div>

            {/* About */}
            {tab === "about" && (
              <div
                className="font-body text-sm"
                style={{ lineHeight: 1.6 }}
              >
                <p style={{ marginBottom: 10 }}>
                  I've never been good at sitting still with one thing. I
                  started freelancing as a designer at 15, co-founded a
                  dessert brand that did well locally before I closed it
                  myself, and spent time trading crypto just to understand
                  how it actually worked.
                </p>

                <p>
                  Now I study AI in Germany and build conversational AI
                  tools at Siemens. The thread connecting all of it is the
                  same: I like figuring out how things work, then building
                  them better.
                </p>
              </div>
            )}

            {/* Contact */}
            {tab === "contact" && (
              <div
                className="font-body text-sm"
                style={{ lineHeight: 2 }}
              >
                <div>
                  <a
                    href="mailto:farhanfahim2469@gmail.com"
                    style={{
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                    }}
                  >
                    farhanfahim2469@gmail.com
                  </a>
                </div>

                <div>München, Germany</div>

                <div>
                  <a
                    href="tel:+491636521637"
                    style={{
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                    }}
                  >
                    +49 1636 521637
                  </a>
                </div>

                <div>
                  <a
                    href="https://github.com/farhanfahim00"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                    }}
                  >
                    github.com/farhanfahim00
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/farhan-fahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                    }}
                  >
                    linkedin.com/in/farhan-fahim
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}