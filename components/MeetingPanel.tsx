import Link from "next/link";

export default function MeetingPanel() {
  return (
<div aria-hidden="true" className="meeting-panel" id="meetingPanel"><div className="meeting-card"><button aria-label="Close" className="close" data-close-meeting="">×</button><span className="kicker">Start a meeting</span><h2 className="title">What would you like to talk about?</h2><p className="muted">You don't need to know the right service. Tell us what is happening and we'll help you find the route.</p><div className="meeting-options"><Link className="meeting-option" href="/contact?route=proposal"><b>COMPETE</b><span>I have a tender, ITT, RFP or proposal.</span></Link><Link className="meeting-option" href="/contact?route=recruitment"><b>BUILD</b><span>I need to hire someone.</span></Link><Link className="meeting-option" href="/contact?route=grow"><b>GROW</b><span>I need digital or marketing help.</span></Link><Link className="meeting-option" href="/contact?route=just-talk"><b>JUST TALK</b><span>I'm figuring it out and want a conversation.</span></Link></div></div></div>
  );
}
