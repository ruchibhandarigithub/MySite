import "./TimelineIndicator.css";

const TimelineIndicator = ({ position, reverse }) => {
  return (
    <div
      className={`timeline-indicator ${position} ${reverse && "reverse"}`}
    ></div>
  );
};

export default TimelineIndicator;
