import React from "react";
import logo from "../images/logo.svg";

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
  article: string;
  isArticleVisible: boolean;
}

const Header = ({
  onOpenArticle,
  timeout,
  article,
  isArticleVisible,
}: HeaderProps) => (
  <header
    id="header"
    style={timeout ? { display: "none" } : {}}
    aria-hidden={isArticleVisible}
  >
    <div className="logo">
      <div
        style={{
          height: "100%",
          width: "100%",
          alignSelf: "center",
          justifySelf: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img
          style={{ width: "75%", alignSelf: "center", justifySelf: "center" }}
          src={logo}
          alt="Logo"
        />
      </div>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Bill Risher</h1>
        <p>
          Developer with a dedication to keep software free and open forever.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              onOpenArticle("about");
            }}
            aria-expanded={article === "about"}
            aria-controls="about"
            aria-haspopup="dialog"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle("projects");
            }}
            aria-expanded={article === "projects"}
            aria-controls="projects"
            aria-haspopup="dialog"
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle("links");
            }}
            aria-expanded={article === "links"}
            aria-controls="links"
            aria-haspopup="dialog"
          >
            Links
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle("contact");
            }}
            aria-expanded={article === "contact"}
            aria-controls="contact"
            aria-haspopup="dialog"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
