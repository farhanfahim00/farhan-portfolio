export default function PathFlag({ label, color = "var(--color-accent-red)" }) {
  return (
    <div style={{ position: "relative", width: 4, height: 70 }}>
      {/* pole */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 3,
          height: 70,
          background: "var(--color-ink)",
          borderRadius: 2,
        }}
      />
      {/* flag triangle */}
      <svg
        width="46"
        height="30"
        style={{ position: "absolute", top: 0, left: 3 }}
      >
        <path
          d="M0 0 L44 8 L0 18 Z"
          fill={color}
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {label && (
        <span
          className="font-hand text-lg"
          style={{
            position: "absolute",
            top: 74,
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}