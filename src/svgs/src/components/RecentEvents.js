import React from "react";
import "./RecentEvents.css";

function RecentEvents() {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Ps gamers",
  //     content: "Ps4",
  //     Images: psplayer1,
  //   },
  //   {
  //     id: 2,
  //     title: "soccer game",
  //     content: "soccer",
  //     Images: soccer,
  //   },
  //   {
  //     id: 3,
  //     title: "game of chess",
  //     content: "Chess",
  //     Images: chess,
  //   },
  //   {
  //     id: 4,
  //     title: "Monopoly game",
  //     content: "Monopoly",
  //     Images: soccer,
  //   },
  // ];

  return (
    <main id="pastEvent_section">
      <div className="cards_wrapper">
        <div className="cards_wrap">
          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">
                <img
                  src="https://i.imgur.com/qhE9KtV.jpg"
                  alt="car"
                  className="card_image"
                />
              </div>
              <div className="card_bottom">
                <div className="card_info">
                <p className="card_category">PS4</p>
                  <p className="title">Manaic button</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    ab.
                  </p>
                <p className="card_creator">By Jobizil</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">
                <img
                  src="https://i.imgur.com/qhE9KtV.jpg"
                  alt="car"
                  className="card_image"
                />
              </div>
              <div className="card_bottom">
                <div className="card_info">
                  <p className="card_category">PS4</p>
                  <p className="title">Incredible Player</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    ab.
                  </p>
                   <p className="card_creator">By Sir~Sukky </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">
                <img
                  src="https://i.imgur.com/qhE9KtV.jpg"
                  alt="car"
                  className="card_image"
                />
              </div>
              <div className="card_bottom">
                <div className="card_info">
                <p className="card_category">Chess</p>
                  <p className="title">Chess Ninja</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    ab.
                  </p>
                <p className="card_creator">By Sir~Temitayo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card_item">
            <div className="card_inner">
              <div className="card_top">
                <img
                  src="https://i.imgur.com/qhE9KtV.jpg"
                  alt="car"
                  className="card_image"
                />
              </div>
              <div className="card_bottom">
                <div className="card_info">
                <p className="card_category">Chess</p>
                  <p className="title">Bravest</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    ab.
                  </p>
              <p className="card_creator">By Gem~maris</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
      
    </main>
  );
}

export default RecentEvents;

      /* <section id="recentEvent" className="events-section">
        <div className="container">
          <h2 className="events-section-header">Last Week Events</h2>

          <div className="recent-Events">
            {posts.map((post, i) => (
              <div className="events-grid" key={i}>
                <img className="event-image" src={post.Images} alt="" />
                <p className="event-title">{post.content}</p>
              </div>
            ))}

            <button onClick="join" className="recent-btn recent-show-all">
              Show-all
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section> */

