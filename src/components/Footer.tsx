import React from 'react';

interface FooterProps {
  timeout: boolean;
}

const Footer = ({ timeout }: FooterProps) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; Bill Risher. Design by: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
  </footer>
);

export default Footer;
