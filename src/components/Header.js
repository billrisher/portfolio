import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.svg';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <div style={{height: '100%', width: '100%', alignSelf: 'center', justifySelf: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center'}}><img style={{width: '75%', alignSelf: 'center', justifySelf: 'center'}} src={logo}></img></div>
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
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('links')
            }}
          >
            Links
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
