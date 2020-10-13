import React from 'react'
import "./NewRelease.css";
import Hot from "../svgs/svgchess1.jpg";

function NewRelease() {
  return (
   
      <section className="new_release">
        <h2 id="hotEvent_text"> AS E DEY HOT </h2>
        <div className="Hot_Event">
          <div className="swing">
            <img src={Hot} alt="" />
          </div>
          <div className="hotEvent_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, veniam atque ab totam tenetur reiciendis. Beatae ad
            inventore magni accusantium et culpa vel qui dolores nihil unde
            eveniet aperiam enim expedita, labore molestias in recusandae!
          </div>
        </div>
      </section>
  )
}

export default NewRelease
