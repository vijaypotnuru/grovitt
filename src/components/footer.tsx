import Link from "next/link";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div>
            <a href="#" className="brand">
              <Logo width={78} height={25} />
            </a>
            <p className="foot-tag" style={{ marginTop: 24 }}>
              A studio for <span className="it">smarter marketing</span> and{" "}
              <span className="it">real growth</span> — campaigns and software,
              side by side, since 2026.
            </p>
          </div>
          <div className="foot-col">
            <h5>(Services)</h5>
            <ul>
              <li>
                <a href="/services/performance-marketing">Digital marketing</a>
              </li>
              <li>
                <a href="/services/web-development">Web development</a>
              </li>
              <li>
                <a href="/services/mobile-apps">Mobile apps</a>
              </li>
              <li>
                <a href="/services/desktop-software">Desktop software</a>
              </li>
              <li>
                <a href="/services/cloud-devops">Cloud &amp; DevOps</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>(Studio)</h5>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>(Connect)</h5>
            <ul>
              <li>
                <a href="https://x.com/grovitt" target="_blank" rel="noopener noreferrer">Twitter / X</a>
              </li>
              <li>
                <a href="https://www.facebook.com/Grovitt" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="http://linkedin.com/company/grovitt" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Grovitt" target="_blank" rel="noopener noreferrer">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>
            &copy; 2026 <b>Grovitt Studio</b> &middot; All rights reserved
          </span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy</Link>
            <Link href="/unsubscribe" style={{ color: "inherit", textDecoration: "none" }}>Unsubscribe</Link>
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
