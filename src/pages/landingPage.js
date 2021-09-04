import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import landingPageData from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "PeachyJelly | Home";
    window.scrollTo(0, 0, "smooooooooth");
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPageData.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPageData.mostPicked}
        />
        <Category data={landingPageData.categories} />
        <Testimony data={landingPageData.testimonial} />
        <Footer />
      </>
    );
  }
}
