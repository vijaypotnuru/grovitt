"use client";

export default function Team() {
  return (
    <section id="team" data-screen-label="08 Team">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(G) Studio</span>
          <span>
            <b>07</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            Senior people.
            <br />
            <span className="it">Senior</span> work.
          </h2>
        </div>

        <div className="team-grid">
          <div className="member m1 reveal">
            <div className="ph">
              <span className="av-big">A</span>
            </div>
            <div className="member-meta">
              <h4>Aarav Sharma</h4>
              <span>
                Founder
                <br />
                CEO
              </span>
            </div>
          </div>
          <div className="member m2 reveal reveal-d1">
            <div className="ph">
              <span className="av-big">N</span>
            </div>
            <div className="member-meta">
              <h4>Neha Patel</h4>
              <span>
                Head of
                <br />
                Engineering
              </span>
            </div>
          </div>
          <div className="member m3 reveal reveal-d2">
            <div className="ph">
              <span className="av-big">L</span>
            </div>
            <div className="member-meta">
              <h4>Leo Marquez</h4>
              <span>
                Director of
                <br />
                Marketing
              </span>
            </div>
          </div>
          <div className="member m4 reveal reveal-d3">
            <div className="ph">
              <span className="av-big">R</span>
            </div>
            <div className="member-meta">
              <h4>Ravi Iyer</h4>
              <span>
                Design
                <br />
                Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
