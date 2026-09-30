export function Footer() {
  return (
    <footer className="site-footer page-gutter">
      <div className="footer-main">
        <a className="footer-brand" href="#top">ARTH.AI</a>
        <a href="/about">ABOUT US</a>
        <a href="/services">SERVICES</a>
        <a href="/contact">CONTACT US</a>
        <a href="/careers">CAREERS</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ARTH.AI. ALL RIGHTS RESERVED.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}
