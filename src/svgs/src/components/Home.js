import React from "react";
import GameList from "../components/GameList";
import RecentEvents from "./RecentEvents";
import Header from "./Header";
import Slides from "./Slides";
import Partners from "./Partners";
import Footer from "./Footer";
import NewRelease from "./NewRelease";

function Home() {
  return (
    <>
      <Header />
      <Slides />
      <GameList />
      <NewRelease />
      <RecentEvents />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
