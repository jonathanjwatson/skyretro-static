
import NavBarLogo from "../../assets/images/sky_retro_logo.png";

const NavBar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand" >
        <img
          src={NavBarLogo}
          alt="Sky Retro Logo"
          style={{ maxHeight: "1.5rem" }}
        />
        <span> </span>Sky Retro
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default NavBar;
