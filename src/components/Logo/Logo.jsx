import "./Logo.css";

const Logo = ({ handleClick }) => {
  return (
    <div className="logo" onClick={handleClick}>
      <span className="number">22</span>
      <span className="letter">RB</span>
    </div>
  );
};

export default Logo;
