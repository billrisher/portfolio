import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          {/*<span className="image main">
            <img src={pic01} alt="" />
          </span>*/}
          <p>
            Hello! My name is Bill Risher and I've been writing code for 10 years of my life, 3 of which have been professional. I have a constant desire to learn new things
            and I don't settle on 'almost there'. Please feel free to take a look around my website and across my other social media platforms!
          </p>
          <p>
            I've had the unique opportunity to be a co-founder of a FinTech startup. Unfortunately, things didn't work out but the knowledge and wisdom that I was able to take
            from that experience is not something you could ever put a price tag on. I now dedicate my time towards issues involving low-level programming and data analytics which 
            admittedly can be drastically different problem sets, but offer that same rewarding feeling once complete.
          </p>
          <p>
            My journey as a developer is far from complete, and I cannot wait to see where it takes me!
          </p>
          {close}
        </article>
        
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Work</h2>
          <div>
            <h3><a className="icon fa-github" href="https://github.com/billrisher/openalgotrader"> OpenAlgoTrader</a></h3>
            <p>
              OpenAlgoTrader, better known as <strong>OAT</strong>, is an open-source algorithmic-trading framework written in Rust.
              I started development on OAT in response to there being very few resources to bootstrap new algorithmic traders. 
              With Quantopian shuttering its collaborative platform in late 2020, new traders are left with very few resources to understand the field.
              OAT's goal is to lessen the barrier of entry into the world of algorithmic trading and provide a welcoming experience for those new to algorithmic trading.
            </p>
          </div>

          <div>
            <h3><a className="icon fa-github" href="https://github.com/billrisher/moneyprint-full"> MoneyPrint</a></h3>
            <p>
              MoneyPrint is an incremental clicker game written in JavaScript and React. MoneyPrint is meant to be an experimentation with CSS' flexbox,
              as well as my crash-course in React's state system. Notable features are its reactive design meant for both portrait and landscape orientations, as well as
              the ability to save your progress and continue later.
            </p>
          </div>
          {close}
        </article>
        <article
          id="links"
          className={`${this.props.article === 'links' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Links</h2>
          <p>
            Feel free to connect with me on any of the below platforms, I always enjoy expanding my network!
          </p>
          <ul className="icons">
            <li>
              <a href="https://linkedin.com/in/william-risher" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/billrisher/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            If you would like to get into contact with me, please don't hesitate to message me on any of my social media platforms or send me an email, at <a href="mailto:me@billrisher.com">me@billrisher.com</a>.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
