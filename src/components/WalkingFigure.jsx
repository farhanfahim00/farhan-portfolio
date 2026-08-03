import frame1 from "../assets/walk-frames/1.png";
import frame2 from "../assets/walk-frames/2.png";
import frame3 from "../assets/walk-frames/3.png";
import frame4 from "../assets/walk-frames/4.png";
import frame5 from "../assets/walk-frames/5.png";

const frames = [frame1, frame2, frame3, frame4, frame5];

export default function WalkingFigure({
  size = 280,
  frameIndex = 0,
  paused = false,
  onClick,
}) {
  const activeFrame = paused ? 0 : frameIndex % frames.length;

  return (
    <img
      src={frames[activeFrame]}
      alt="Farhan Fahim Taimoor, click for contact info"
      draggable={false}
      onClick={onClick}
      className="cursor-pointer-hand"
      style={{
        height: size,
        width: "auto",
        display: "block",
        userSelect: "none",
        pointerEvents: "auto",
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    />
  );
}