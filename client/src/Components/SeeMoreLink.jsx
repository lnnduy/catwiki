import { Link } from "react-router-dom";

function SeeMoreLink({ path, text }) {
  return (
    <Link to={path} className="see-more-link">
      <p>{text}</p>
      <i className="material-icons">arrow_right_alt</i>
    </Link>
  );
}

export default SeeMoreLink;
