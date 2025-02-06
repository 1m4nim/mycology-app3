import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link
      to="/"
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        fontSize: "2rem",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      Home
    </Link>
  );
};

export default HomeLink;
