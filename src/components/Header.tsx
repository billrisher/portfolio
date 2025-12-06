import React from 'react';
import logo from '../images/logo.svg';

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

const Header = ({ onOpenArticle, timeout }: HeaderProps) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <div style={{height: '100%', width: '100%', alignSelf: 'center', justifySelf: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <img style={{width: '75%', alignSelf: 'center', justifySelf: 'center'}} src={logo} alt="Logo" />
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
              onOpenArticle('about');
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('projects');
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('links');
            }}
          >
            Links
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
