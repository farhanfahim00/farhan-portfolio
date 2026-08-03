export default function SkillsGrid({ skills }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
      }}
    >
      <h2 className="font-hand text-4xl" style={{ marginBottom: 40 }}>
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
          gap: "24px",
          maxWidth: 700,
          width: "100%",
        }}
      >
        {skills.map((group) => (
          <div
            key={group.category}
            style={{
              background: "#FFFFFF",
              border: "2px solid var(--color-ink)",
              borderRadius: "6px",
              padding: "20px",
              boxShadow: "3px 4px 0px rgba(0,0,0,0.12)",
            }}
          >
            <h3 className="font-hand text-2xl" style={{ marginBottom: 12 }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-body"
                  style={{
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-ink)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}