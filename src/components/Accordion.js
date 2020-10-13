import React from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
const Accord = () => (
  <div className="wrapper">
      {_items.map((_item, i) => (
    <Accordion key={i} title={_item.titles} className="accordion-content">
    <p className="event-date">{_item.date}</p>
      <p className="event-location">
             <b> Location:&nbsp;</b> {_item.location} <br />
             </p>
                         <p className="event-details">
               <b> Created By:&nbsp;</b>
               {_item.created} <br />
               <b> Description:&nbsp;</b> {_item.desc}
             </p>
    </Accordion>
      ))}
  </div>
);

export default Accord;

const _items = [
  {
    id: 1,
    titles: "play off",
    date: "10th of October, 2020",
    created: "Mr Temitayo",
    desc:
      'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
    location: "Island, Ajah",
  },
  {
    id: 2,
    titles: "play in",
    date: "15th of October, 2020",
    created: "Mr Temitayo",
    desc:
      'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
    location: "Island, Ajah",
  },
  {
    id: 3,
    titles: "Big deal",
    date: "20th of October, 2020",
    created: "Mr Temitayo",
    desc:
      'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
    location: "Island, Ajah",
  },
  {
    id: 4,
    titles: "Just deal",
    date: "23th of October, 2020",
    created: "Mr Temitayo",
    desc:
      'Known as "The Magician", Mr Temitayo is well regarded by many professionals as the greatest all around player of all time.',
    location: "Island, Ajah",
  },
];