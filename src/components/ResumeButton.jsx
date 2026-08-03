export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download="Farhan_Fahim_Taimoor_Resume.pdf"
      className="font-hand"
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 50,
        background: "#FFFFFF",
        border: "2px solid var(--color-ink)",
        borderRadius: "6px",
        padding: "8px 18px",
        fontSize: "18px",
        color: "var(--color-ink)",
        textDecoration: "none",
        boxShadow: "3px 4px 0px rgba(0,0,0,0.12)",
        cursor: "pointer",
      }}
    >
      Resume
    </a>
  );
}