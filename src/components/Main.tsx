import React from "react";
import { FocusTrap } from "focus-trap-react";
import { Article } from "./Article";
import OpenInNewIcon from "../images/open-in-new.svg";

interface MainProps {
  isArticleVisible: boolean;
  timeout: boolean;
  articleTimeout: boolean;
  article: string;
  onCloseArticle: () => void;
  setWrapperRef: (node: HTMLDivElement | null) => void;
}

const aboutBody = (
  <div>
    <p>
      Hello! My name is Bill Risher and I've been writing code for 10 years of
      my life, 3 of which have been professional. I have a constant desire to
      learn new things and I don't settle on 'almost there'. Please feel free to
      take a look around my website and across my other social media platforms!
    </p>
    <p>
      I've had the unique opportunity to be a co-founder of a FinTech startup.
      Unfortunately, things didn't work out but the knowledge and wisdom that I
      was able to take from that experience is not something you could ever put
      a price tag on. I now dedicate my time towards issues involving low-level
      programming and data analytics which admittedly can be drastically
      different problem sets, but offer that same rewarding feeling once
      complete.
    </p>
    <p>
      My journey as a developer is far from complete, and I cannot wait to see
      where it takes me!
    </p>
  </div>
);

const projectsBody = (
  <div>
    <div>
      <h3>
        <a
          className="icon fa-github project-link"
          href="https://github.com/billrisher/openalgotrader"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenAlgoTrader on GitHub (opens in new tab)"
        >
          Open Algo Trader{" "}
          <img
            src={OpenInNewIcon}
            alt=""
            aria-hidden="true"
            className="external-icon"
          />
        </a>
      </h3>
      <p>
        OpenAlgoTrader, better known as <strong>OAT</strong>, is an open-source
        algorithmic-trading framework written in Rust. I started development on
        OAT in response to there being very few resources to bootstrap new
        algorithmic traders. With Quantopian shuttering its collaborative
        platform in late 2020, new traders are left with very few resources to
        understand the field. OAT's goal is to lessen the barrier of entry into
        the world of algorithmic trading and provide a welcoming experience for
        those new to algorithmic trading.
      </p>
    </div>

    <div>
      <h3>
        <a
          className="icon fa-github project-link"
          href="https://github.com/billrisher/moneyprint-full"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MoneyPrint on GitHub (opens in new tab)"
        >
          MoneyPrint{" "}
          <img
            src={OpenInNewIcon}
            alt=""
            aria-hidden="true"
            className="external-icon"
          />
        </a>
      </h3>
      <p>
        MoneyPrint is an incremental clicker game written in JavaScript and
        React. MoneyPrint is meant to be an experimentation with CSS' flexbox,
        as well as my crash-course in React's state system. Notable features are
        its reactive design meant for both portrait and landscape orientations,
        as well as the ability to save your progress and continue later.
      </p>
    </div>
  </div>
);

const linksBody = (
  <div>
    <p>
      Feel free to connect with me on any of the below platforms, I always enjoy
      expanding my network!
    </p>
    <ul className="icons">
      <li>
        <a
          href="https://linkedin.com/in/william-risher"
          className="icon"
          aria-label="Connect on LinkedIn"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/billrisher/"
          className="icon"
          aria-label="View GitHub profile"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  </div>
);

const contactBody = (
  <div>
    <p>
      If you would like to get into contact with me, please don't hesitate to
      message me on any of my social media platforms or send me an email, at{" "}
      <a href="mailto:me@billrisher.com">me@billrisher.com</a>.
    </p>
  </div>
);

const Main = (props: MainProps) => {
  return (
    <FocusTrap active={props.isArticleVisible && props.articleTimeout}>
      <div
        ref={props.setWrapperRef}
        id="main"
        style={props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <Article
          id="about"
          title="About Me"
          body={aboutBody}
          onClose={props.onCloseArticle}
          isActive={props.article === "about"}
          isTimeout={props.articleTimeout}
        />
        <Article
          id="projects"
          title="My Work"
          body={projectsBody}
          onClose={props.onCloseArticle}
          isActive={props.article === "projects"}
          isTimeout={props.articleTimeout}
        />
        <Article
          id="links"
          title="My Links"
          body={linksBody}
          onClose={props.onCloseArticle}
          isActive={props.article === "links"}
          isTimeout={props.articleTimeout}
        />
        <Article
          id="contact"
          title="Contact Me"
          body={contactBody}
          onClose={props.onCloseArticle}
          isActive={props.article === "contact"}
          isTimeout={props.articleTimeout}
        />
      </div>
    </FocusTrap>
  );
};

export default Main;
