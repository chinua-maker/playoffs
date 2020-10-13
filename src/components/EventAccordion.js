// import React from "react";
// import "./EventAccordion.css";

// const EventAccordion = ({ title, children }) => {
//   const [isOpen, setOpen] = React.useState(false);

//   return (
//     <div className="event_accordion-wrapper">
//       <div
//         className={`accordion-title ${isOpen ? "open" : ""}`}
//         onClick={() => setOpen(!isOpen)}
//       >
//         {title}
//       </div>
//       <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
//         <div className="accordion-content">{children}</div>
//       </div>
//     </div>
//   );
// };

// const Accordion = () => (
//   <>
//     <section id="accordionImg_Event">
//       <div className="event_wrapper">
//         {_items.map((_item, i) => (
//           <EventAccordion key={i} title={_item.titles}>
//             <p className="event-date">{_item.date}</p>
//             <p className="event-location">
//               <b> Location:&nbsp;</b> {_item.location} <br />
//             </p>
//             <p className="event-details">
//               <b> Created By:&nbsp;</b>
//               {_item.created} <br />
//               <b> Description:&nbsp;</b> {_item.desc}
//             </p>
//           </EventAccordion>
//         ))}
//       </div>
//     </section>
//   </>
// );

// export default Accordion;

// const _items = [
//   {
//     id: 1,
//     titles: "Why is the sky blue?",
//     date: "10th of October, 2020",
//     created: "Mr Temitayo",
//     desc:
//       'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
//     location: "Island, Ajah",
//   },
//   {
//     id: 2,
//     titles: "Why is the sky blue?",
//     date: "15th of October, 2020",
//     created: "Mr Temitayo",
//     desc:
//       'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
//     location: "Island, Ajah",
//   },
//   {
//     id: 3,
//     titles: "Why is the sky blue?",
//     date: "20th of October, 2020",
//     created: "Mr Temitayo",
//     desc:
//       'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
//     location: "Island, Ajah",
//   },
//   {
//     id: 4,
//     titles: "Why is the sky blue?",
//     date: "23th of October, 2020",
//     created: "Mr Temitayo",
//     desc:
//       'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
//     location: "Island, Ajah",
//   },
// ];
