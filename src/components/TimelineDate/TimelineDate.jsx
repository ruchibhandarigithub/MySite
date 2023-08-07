import "./TimelineDate.css";

const TimelineDate = ({ date, fade }) => {
  return (
    <span className="timeline-date" data-aos={fade} data-aos-duration="1000">
      {date}
    </span>
  );
};

export default TimelineDate;
