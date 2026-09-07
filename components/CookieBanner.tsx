"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CookieBanner() {
  useEffect(() => {
    const cookie = document.querySelector("#cookieBanner");
    if (cookie && !localStorage.getItem("alioth_cookie_ack")) cookie.classList.add("show");

    const dismiss = () => {
      localStorage.setItem("alioth_cookie_ack", "1");
      cookie?.classList.remove("show");
    };

    const buttons = document.querySelectorAll("[data-cookie]");
    buttons.forEach((b) => b.addEventListener("click", dismiss));
    return () => buttons.forEach((b) => b.removeEventListener("click", dismiss));
  }, []);

  return (
    <div aria-label="Cookie notice" className="cookie" id="cookieBanner" role="dialog">
      <p>We use essential website storage by default. We do not load advertising cookies. <Link href="/privacy"><u>Privacy</u></Link></p>
      <div className="cookie-actions">
        <button data-cookie="">Dismiss</button>
        <button className="accept" data-cookie="">Okay</button>
      </div>
    </div>
  );
}
