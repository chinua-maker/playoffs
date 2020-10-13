import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import "bootstrap/dist/css/bootstrap.css";
import Image1 from "../images/ps5.jpeg";
import Image2 from "../images/grid-5.jpg";
import Image7 from "../images/monopoly.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Blog() {
  return (
    <>
      <Header />
      <section className="latest-articles-area section-padding-100-0 bg-img bg-pattern bg-fixed">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="mb-100">
                <h2
                  className="section-title mb-70 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  Latest Articles
                </h2>

                <div
                  className="single-articles-area style-2 d-flex flex-wrap mb-30 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="article-thumbnail">
                    <img src={Image1} alt="" />
                  </div>
                  <div className="article-content">
                    <h5 className="post-title">
                      Gamer’s new releases for 2018
                    </h5>
                    <div className="post-meta">
                      <p className="post-date">July 12, 2018</p>
                      <Link to="#" className="post-comments" id="a">
                        2 Comments
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris velit arcu, scelerisque dignissim massa quis,
                      mattis facilisis erat. Aliquam erat volutpat. Sed
                      efficitur diam.
                    </p>
                  </div>
                </div>

                <div
                  className="single-articles-area style-2 d-flex flex-wrap mb-30 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="article-thumbnail">
                    <img src={Image2} alt="" />
                  </div>
                  <div className="article-content">
                    <h5 className="post-title">
                      Gamer’s new releases for 2018
                    </h5>
                    <div className="post-meta">
                      <p className="post-date">July 12, 2018</p>
                      <Link to="#" className="post-comments" id="a">
                        2 Comments
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris velit arcu, scelerisque dignissim massa quis,
                      mattis facilisis erat. Aliquam erat volutpat. Sed
                      efficitur diam.
                    </p>
                  </div>
                </div>

                <div
                  className="single-articles-area style-2 d-flex flex-wrap mb-30 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="article-thumbnail">
                    <img src={Image7} alt="" />
                  </div>
                  <div className="article-content">
                    <h5 className="post-title">
                      Gamer’s new releases for 2018
                    </h5>
                    <div className="post-meta">
                      <p className="post-date">July 12, 2018</p>
                      <Link to="#" className="post-comments" id="a">
                        2 Comments
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris velit arcu, scelerisque dignissim massa quis,
                      mattis facilisis erat. Aliquam erat volutpat. Sed
                      efficitur diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h2
                className="section-title mb-70 wow fadeInUp"
                data-wow-delay="100ms"
              >
                This week’s deal
              </h2>

              <div
                className="single-widget-area add-widget wow fadeInUp"
                data-wow-delay="300ms"
              >
                <Link to="#">
                  <img src={Image1} alt="" />
                </Link>

                {/* <img src={sideImage} className="side-img" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
