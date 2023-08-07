import "./SectionHeading.css";

const SectionHeading = ({ fade, text, colour }) => {
  return (
    <h2
      className={`section-heading ${colour}`}
      data-aos={fade}
      data-aos-duration="1000"
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
