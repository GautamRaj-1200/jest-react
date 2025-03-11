import { useEffect, useRef, useState } from "react";
// import "./navbar.css";
import navbarLogo from "../../images/claude-icon.png"
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };
  console.log(navbarVisible);

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setNavbarVisible(false);
    }
  };
  const handleLinkClick = () => {
    setNavbarVisible(false);
  };

  useEffect(() => {
    if (navbarVisible)
      document.addEventListener("mousedown", handleClickOutside);
    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarVisible]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <div className="navbar__logo-container"><img src={navbarLogo} alt="" /></div>
          </div>
          <ul
            ref={navbarRef}
            className={`navbar__list ${navbarVisible ? "active" : ""}`}
          >
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Blogs
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                {" "}
                SignUp
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                {" "}
                Login
              </a>
            </li>
          </ul>
          <div className="navbar__search-container">
            <input placeholder="search" className="navbar__search" />
            <button className="navbar__search-btn">Search</button>
          </div>
          <div onClick={toggleNavbar} className="navbar__hamburger" ref={hamburgerRef}>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar1 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar2 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar3 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;