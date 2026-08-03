import { motion } from "framer-motion";

export default function ProjectCard({ data }) {
  if (!data) return null;

  const isProject = data.type === "project";
  const isClosing = data.type === "closing";
  const hasGithub = isProject && data.github && data.github !== "ADD_LINK_HERE";

  const copyEmail = (e) => {
    navigator.clipboard.writeText("farhanfahim2469@gmail.com");

    const el = e.currentTarget;
    const original = el.textContent;

    el.textContent = "Copied!";

    setTimeout(() => {
      el.textContent = original;
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        position: "absolute",
        bottom: "calc(100% + 40px)",
        left: "50%",
        transform: "translateX(-50%) rotate(-1.5deg)",
        width: 300,
        background: "#FFFFFF",
        border: "2px solid var(--color-ink)",
        borderRadius: "6px",
        padding: "18px 20px",
        boxShadow: "4px 6px 0px rgba(0,0,0,0.15)",
        zIndex: 20,
      }}
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{
            width: "72px",
            height: "72px",
            objectFit: "contain",
            marginBottom: "8px",
          }}
        />
      )}

      <h3
        className="font-hand text-2xl"
        style={{
          lineHeight: 1.1,
        }}
      >
        {data.title}
      </h3>

      {data.role && (
        <p
          className="font-body text-sm text-ink-light"
          style={{
            marginTop: 2,
          }}
        >
          {data.role}
        </p>
      )}

      {!isClosing && (
        <p
          className="font-body text-xs text-ink-light"
          style={{
            margin: "2px 0 8px",
          }}
        >
          {data.year}
        </p>
      )}

      {data.description && (
        <p
          className="font-body text-sm"
          style={{
            lineHeight: 1.4,
            marginBottom: 10,
          }}
        >
          {data.description}
        </p>
      )}

      {data.tech && data.tech.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: 12,
          }}
        >
          {data.tech.map((t) => (
            <span
              key={t}
              className="font-body"
              style={{
                fontSize: "11px",
                padding: "3px 8px",
                borderRadius: "999px",
                background: "var(--color-paper)",
                border: "1px solid var(--color-ink)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {hasGithub && (
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-hand text-lg cursor-pointer-hand"
          style={{
            display: "inline-block",
            textDecoration: "underline",
            color: "var(--color-ink)",
            transition: "transform 0.15s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          View on GitHub
        </a>
      )}

      {isClosing && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            className="font-body text-sm"
            style={{
              lineHeight: 1.5,
              marginBottom: 4,
            }}
          >
            That's the journey so far. If you're building something
            interesting, or just want to talk shop, I'd love to hear from
            you.
          </p>

          <a
            href="/resume.pdf"
            download="Farhan_Fahim_Taimoor_Resume.pdf"
            className="font-hand text-lg cursor-pointer-hand"
            style={{
              textDecoration: "underline",
              color: "var(--color-ink)",
            }}
          >
            Download Resume
          </a>

          <button
            onClick={copyEmail}
            className="font-hand text-lg cursor-pointer-hand"
            style={{
              textDecoration: "underline",
              color: "var(--color-ink)",
              background: "none",
              border: "none",
              padding: 0,
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            Copy Email Address
          </button>

          <a
            href="https://www.linkedin.com/in/farhan-fahim/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hand text-lg cursor-pointer-hand"
            style={{
              textDecoration: "underline",
              color: "var(--color-ink)",
            }}
          >
            Connect on LinkedIn
          </a>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          width: "2px",
          height: "40px",
          background: "var(--color-ink)",
          transform: "translateX(-50%)",
        }}
      />
    </motion.div>
  );
}