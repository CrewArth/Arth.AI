export function Footer() {
  return (
    <footer className="site-footer page-gutter">
      <div className="footer-main">
        <a className="footer-brand" href="#top">ARTH.AI</a>
        <span>COMPLETE AI / WEB SOLUTION</span>
        <a href="mailto:arthvala@gmail.com">arthvala@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ARTH.AI. ALL RIGHTS RESERVED.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}
