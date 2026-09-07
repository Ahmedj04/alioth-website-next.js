"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MeetingPanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-meeting]")) {
        setOpen(true);
      }

      if (target.closest("[data-close-meeting]")) {
        setOpen(false);
      }

      if (target.id === "meetingPanel") {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      aria-hidden={!open}
      className={`meeting-panel${open ? " open" : ""}`}
      id="meetingPanel"
    >
      <div className="meeting-card">
        <button
          aria-label="Close"
          className="close"
          data-close-meeting=""
          type="button"
        >
          ×
        </button>

        <span className="kicker">Start a meeting</span>

        <h2 className="title">
          What would you like to talk about?
        </h2>

        <p className="muted">
          You don't need to know the right service. Tell us what is happening
          and we'll help you find the route.
        </p>

        <div className="meeting-options">
          <Link
            className="meeting-option"
            href="/contact?route=proposal"
            onClick={() => setOpen(false)}
          >
            <b>COMPETE</b>
            <span>I have a tender, ITT, RFP or proposal.</span>
          </Link>

          <Link
            className="meeting-option"
            href="/contact?route=recruitment"
            onClick={() => setOpen(false)}
          >
            <b>BUILD</b>
            <span>I need to hire someone.</span>
          </Link>

          <Link
            className="meeting-option"
            href="/contact?route=grow"
            onClick={() => setOpen(false)}
          >
            <b>GROW</b>
            <span>I need digital or marketing help.</span>
          </Link>

          <Link
            className="meeting-option"
            href="/contact?route=just-talk"
            onClick={() => setOpen(false)}
          >
            <b>JUST TALK</b>
            <span>I'm figuring it out and want a conversation.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}