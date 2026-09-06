import Link from "next/link";

export default function CookieBanner() {
  return (
<div aria-label="Cookie notice" className="cookie" id="cookieBanner" role="dialog"><p>We use essential website storage by default. We do not load advertising cookies. <Link href="/privacy"><u>Privacy</u></Link></p><div className="cookie-actions"><button data-cookie="">Dismiss</button><button className="accept" data-cookie="">Okay</button></div></div>
  );
}
