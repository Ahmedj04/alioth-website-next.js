// "use client";

// import { useEffect, useState } from "react";
// import { InlineWidget } from "react-calendly";

// export default function MeetingModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleMeetingClick = () => {
//       setIsOpen(true);
//     };

//     document.querySelectorAll("[data-meeting]").forEach((button) => {
//       button.addEventListener("click", handleMeetingClick);
//     });

//     return () => {
//       document.querySelectorAll("[data-meeting]").forEach((button) => {
//         button.removeEventListener("click", handleMeetingClick);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     document.body.classList.add("no-scroll");

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.classList.remove("no-scroll");
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="meeting-modal"
//       role="dialog"
//       aria-modal="true"
//       aria-label="Book a meeting"
//       onClick={(event) => {
//         if (event.target === event.currentTarget) {
//           setIsOpen(false);
//         }
//       }}
//     >
//       <div className="meeting-modal-content">
//         <button
//           type="button"
//           className="meeting-modal-close"
//           aria-label="Close meeting booking"
//           onClick={() => setIsOpen(false)}
//         >
//           ×
//         </button>

//         <div className="meeting-modal-header">
//           <span className="kicker">BOOK A CONVERSATION</span>

//           <h2>
//             Let's talk about
//             <br />
//             <span className="accent">what you need.</span>
//           </h2>

//           <p>
//             Choose a time that works for you. We'll use the first conversation
//             to understand your requirements and work out the best way forward.
//           </p>
//         </div>

//         <div className="meeting-calendly">
//           <InlineWidget
//             url="https://calendly.com/ahmed-jan0004/30min"
//             styles={{
//               height: "650px",
//               minWidth: "320px",
//               width: "100%",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
