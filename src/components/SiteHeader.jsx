export default function SiteHeader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: 24,
        zIndex: 50,
      }}
    >
      <h1 className="font-hand text-2xl" style={{ margin: 0, lineHeight: 1.1 }}>
        Farhan Fahim Taimoor
      </h1>
      <p
        className="font-body text-xs text-ink-light"
        style={{ margin: "2px 0 0", fontStyle: "italic" }}
      >
        AI Student & Automation & AI Engineer
      </p>
    </div>
  );
}