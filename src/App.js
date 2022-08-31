import React from "react";
import "./App.css";

import Navbar from "./sections/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import Tracks from "./sections/Tracks/Tracks";
import Speakers from "./sections/Speakers/Speakers";
import Schedule from "./sections/Schedule/Schedule";
import FAQ from "./sections/FAQ/FAQ";
import Sponsors from "./sections/Sponsors/Sponsors";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <About />
        <Tracks />
        <Speakers />
        <Schedule />
        <FAQ />
        <Sponsors />
      </div>
    );
  }
}

export default App;

//for push
