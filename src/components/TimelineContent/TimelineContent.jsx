import "./TimelineContent.css";

const TimelineContent = ({ fade, title, date, description, skills }) => {
  return (
    <div className="timeline-content" data-aos={fade} data-aos-duration="1000">
      <h3>{title}</h3>
      <p className="hidden-date">{date}</p>
      <p>{description}</p>
      {skills && <p>{skills}</p>}
    </div>
  );
};

export default TimelineContent;
