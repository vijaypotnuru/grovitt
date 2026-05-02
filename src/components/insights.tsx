export default function Insights() {
  return (
    <section id="insights" data-screen-label="10 Insights">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(I) Journal</span>
          <span>
            <b>09</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            Notes from the
            <br />
            <span className="it">front line</span>.
          </h2>
        </div>

        <div className="insights-grid">
          <article className="post p1 feature reveal">
            <div className="ph">
              <span className="pdeco">+</span>
            </div>
            <div className="post-meta">
              <span className="cat">Performance</span>
              <span>· 6 min read</span>
              <span>· Apr 2026</span>
            </div>
            <h4>
              Why blended CAC is the only acquisition metric that matters in
              2026.
            </h4>
          </article>

          <article className="post p2 reveal reveal-d1">
            <div className="ph">
              <span className="pdeco">∿</span>
            </div>
            <div className="post-meta">
              <span className="cat">Engineering</span>
              <span>· 9 min</span>
            </div>
            <h4>
              Building mobile apps that don&apos;t feel like mobile-first
              websites.
            </h4>
          </article>

          <article className="post p3 reveal reveal-d2">
            <div className="ph">
              <span className="pdeco">★</span>
            </div>
            <div className="post-meta">
              <span className="cat">SEO</span>
              <span>· 5 min</span>
            </div>
            <h4>
              The new content moat: depth beats frequency in the AI era.
            </h4>
          </article>
        </div>
      </div>
    </section>
  );
}
