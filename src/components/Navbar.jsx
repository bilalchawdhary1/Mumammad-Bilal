import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarLinks = [
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("working");
    
  };

  return (
    <div className="navbar">
      <div className="log">
        <h1>
          <Link to={"/"}>
            <strong>M</strong><span>B</span><span className="span-dot">.</span>
          </Link>
        </h1>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="connect-btn">
        <a href="#contact">Connect Me ⚡</a>
      </button>
    </div>
  );
};

export default Navbar;
