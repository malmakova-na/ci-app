import './Footer.css';

export const Footer = ({ copyRight, links }) => (
  <footer className="footer">
    <div className="footerLinks">
      {links.map((link) => <a href="#">{link}</a>)}
    </div>
    <div className="copy">
      &copy; 2020,
      {copyRight}
    </div>
  </footer>
);
