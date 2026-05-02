export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div>
            <a
              href="#"
              className="brand"
              style={{ fontSize: 36, display: "inline-flex" }}
            >
              grovitt
              <span className="tail"></span>
            </a>
            <p className="foot-tag" style={{ marginTop: 24 }}>
              A studio for <span className="it">smarter marketing</span> and{" "}
              <span className="it">real growth</span> — campaigns and software,
              side by side, since 2013.
            </p>
          </div>
          <div className="foot-col">
            <h5>(Services)</h5>
            <ul>
              <li>
                <a href="#">Digital marketing</a>
              </li>
              <li>
                <a href="#">Web development</a>
              </li>
              <li>
                <a href="#">Mobile apps</a>
              </li>
              <li>
                <a href="#">Desktop software</a>
              </li>
              <li>
                <a href="#">Cloud & DevOps</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>(Studio)</h5>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#insights">Journal</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>(Connect)</h5>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter / X</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>
            &copy; 2026 <b>Grovitt Studio</b> &middot; All rights reserved
          </span>
          <span>Privacy &middot; Terms &middot; Cookies</span>
        </div>
      </div>
    </footer>
  );
}
