import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>PORTFOLIO</span>
        <div className="socials">
          <a href="">
            <img src="./facebook.png" alt="" />
          </a>
          <a href="">
            <img src="./instagram.png" alt="" />
          </a>
          <a href="">
            <img src="./youtube.png" alt="" />
          </a>
          <a href="">
            <img src="./linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
