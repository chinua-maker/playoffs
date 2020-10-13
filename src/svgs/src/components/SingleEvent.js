import React from 'react';
import './SingleEvent.css';
import sec3 from '../images/5.jpg';
import Header from "./Header";
import Footer from "./Footer"

function SingleEvent() {
  return (
    <>
    <Header />
          <section className="SingleGame_item">
            <img src={sec3} alt="" className="SingleGame_image"/>

            <div className="SingleGame_details">
              <div className="SingleGame_category">PS4</div>
              <div className="SingleGame_info">
                <p className="Singlegame_title">Lord of Games</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odit quasi dolores sint expedita eveniet beatae, consectetur repellendus praesentium ad recusandae natus ipsa temporibus saepe blanditiis accusantium sequi magnam explicabo?</p>
              </div>
              <div className="SingleGame_creator">
                By Nte~legal
              </div>
            </div>
          </section>
          <section className="SingleGame_item">
            <img src="https://i.imgur.com/qhE9KtV.jpg" alt="" className="SingleGame_image"/>

            <div className="SingleGame_details">
              <div className="SingleGame_category">PS4</div>
              <div className="SingleGame_info">
                <p className="Singlegame_title">Lord of Games</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odit quasi dolores sint expedita eveniet beatae, consectetur repellendus praesentium ad recusandae natus ipsa temporibus saepe blanditiis accusantium sequi magnam explicabo?</p>
              </div>
              <div className="SingleGame_creator">
                By Nte~legal
              </div>
            </div>
          </section>
          <section className="SingleGame_item">
            <img src={sec3} alt="" className="SingleGame_image"/>

            <div className="SingleGame_details">
              <div className="SingleGame_category">PS4</div>
              <div className="SingleGame_info">
                <p className="Singlegame_title">Lord of Games</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odit quasi dolores sint expedita eveniet beatae, consectetur repellendus praesentium ad recusandae natus ipsa temporibus saepe blanditiis accusantium sequi magnam explicabo?</p>
              </div>
              <div className="SingleGame_creator">
                By Nte~legal
              </div>
            </div>
          </section>
          <section className="SingleGame_item">
            <img src="https://i.imgur.com/qhE9KtV.jpg" alt="" className="SingleGame_image"/>

            <div className="SingleGame_details">
              <div className="SingleGame_category">PS4</div>
              <div className="SingleGame_info">
                <p className="Singlegame_title">Lord of Games</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odit quasi dolores sint expedita eveniet beatae, consectetur repellendus praesentium ad recusandae natus ipsa temporibus saepe blanditiis accusantium sequi magnam explicabo?</p>
              </div>
              <div className="SingleGame_creator">
                By Nte~legal
              </div>
            </div>
          </section>
          <Footer />
          </>
  )
}

export default SingleEvent
