const TABS = ["Projects", "Work Experience", "Skills"];

export default function NavTabs({ active, onChange }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 0,
        zIndex: 50,
        background: "#FFFFFF",
        border: "2px solid var(--color-ink)",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "3px 4px 0px rgba(0,0,0,0.12)",
      }}
    >
      {TABS.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className="font-hand"
          style={{
            fontSize: "18px",
            padding: "8px 20px",
            background: active === tab ? "var(--color-ink)" : "transparent",
            color: active === tab ? "var(--color-paper)" : "var(--color-ink)",
            border: "none",
            borderRight:
              i < TABS.length - 1 ? "2px solid var(--color-ink)" : "none",
            cursor: "pointer",
            transition: "background 0.15s ease, color 0.15s ease",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}