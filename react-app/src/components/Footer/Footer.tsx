import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <ul className="menu fRow fCenter">
        {/* GitHub */}
        <li className="gradient-hover">
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <svg className="zoom-hover" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <rect y="0.411621" width="22.5882" height="22.5882" rx="2" fill="#FFFCFC" />
              <path d="M11.2941 0.411621C5.05412..." fill="black" />
            </svg>
          </a>
        </li>

        {/* Google */}
        <li className="gradient-hover">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <svg className="zoom-hover" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <rect x="0.352905" y="0.411621" width="22.5882" height="22.5882" rx="2" fill="#FFFCFC" />
              <path d="M22.2992 9.67063C22.432..." fill="black" />
            </svg>
          </a>
        </li>

        {/* Twitter/X */}
        <li className="gradient-hover">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <svg className="zoom-hover" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <rect x="0.0588379" y="0.411621" width="22.5882" height="22.5882" rx="2" fill="#FFFCFC" />
              <path d="M17.8484 1.47021H21.3121..." fill="black" />
            </svg>
          </a>
        </li>

        {/* Instagram */}
        <li className="gradient-hover">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg className="zoom-hover" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <rect x="0.411743" y="0.411621" width="22.5882" height="22.5882" rx="2" fill="#FFFCFC" />
              <path d="M11.7069 0.411621C8.63959..." fill="black" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
