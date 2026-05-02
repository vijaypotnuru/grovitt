"use client";

import { type FormEvent, useState } from "react";

export default function Contact() {
  const [buttonState, setButtonState] = useState<
    "idle" | "sending" | "sent"
  >("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setButtonState("sending");

    setTimeout(() => {
      setButtonState("sent");

      setTimeout(() => {
        setButtonState("idle");
        e.currentTarget.reset();
      }, 2400);
    }, 900);
  };

  const buttonContent = (() => {
    switch (buttonState) {
      case "sending":
        return "Sending…";
      case "sent":
        return "\u2713 Message sent";
      default:
        return (
          <>
            Send message <span>→</span>
          </>
        );
    }
  })();

  const buttonStyle: React.CSSProperties =
    buttonState === "sent"
      ? { backgroundColor: "#1a7c3f", borderColor: "#1a7c3f" }
      : {};

  return (
    <section id="contact" data-screen-label="11 Contact">
      <div className="wrap">
        <div
          className="sec-num reveal"
          style={{ borderTopColor: "var(--line)" }}
        >
          <span>(J) Let&apos;s talk</span>
          <span>End</span>
        </div>
        <div className="sec-head reveal">
          <h2>
            Tell us what you&apos;re
            <br />
            trying to <span className="it">grow</span>.
          </h2>
        </div>

        <div className="ct-grid">
          <div className="ct-info reveal">
            <p>
              Whether you&apos;re scaling a brand, shipping a product, or
              rebuilding a stack — we&apos;d{" "}
              <span className="it">like to hear about it</span> before you sign
              anything else.
            </p>
            <div className="ct-channels">
              <a className="ct-ch" href="mailto:hello@grovitt.com">
                <small>(Email)</small>
                <b>hello@grovitt.com</b>
                <span className="arr">↗</span>
              </a>
              <a className="ct-ch" href="tel:+14155550142">
                <small>(Phone)</small>
                <b>+1 415 555 0142</b>
                <span className="arr">↗</span>
              </a>
              <a className="ct-ch" href="#">
                <small>(Studios)</small>
                <b>SF · Bengaluru</b>
                <span className="arr">↗</span>
              </a>
              <a className="ct-ch" href="#">
                <small>(Social)</small>
                <b>@grovitt.studio</b>
                <span className="arr">↗</span>
              </a>
            </div>
          </div>

          <form
            className="form reveal reveal-d1"
            onSubmit={handleSubmit}
          >
            <h3>
              Start a <span className="it">conversation</span>.
            </h3>
            <div className="sub">
              Tell us a little about your project — we&apos;ll take it from
              there.
            </div>
            <div className="field-row">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Jane Cooper"
                  required
                  disabled={buttonState !== "idle"}
                />
              </div>
              <div className="field">
                <label>Company</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  disabled={buttonState !== "idle"}
                />
              </div>
            </div>
            <div className="field">
              <label>Work email</label>
              <input
                type="email"
                placeholder="jane@acme.com"
                required
                disabled={buttonState !== "idle"}
              />
            </div>
            <div className="field">
              <label>What do you need?</label>
              <select disabled={buttonState !== "idle"}>
                <option>Digital marketing</option>
                <option>Web development</option>
                <option>Mobile app development</option>
                <option>Desktop software</option>
                <option>Cloud / DevOps</option>
                <option>A bit of everything</option>
              </select>
            </div>
            <div className="field">
              <label>Project details</label>
              <textarea
                placeholder="Goals, timeline, anything else we should know."
                disabled={buttonState !== "idle"}
              />
            </div>
            <button
              type="submit"
              className="form-cta"
              disabled={buttonState !== "idle"}
              style={buttonStyle}
            >
              {buttonContent}
            </button>
          </form>
        </div>
      </div>

      <div className="foot-huge">
        grovitt<span className="gl">.</span>
      </div>
    </section>
  );
}
