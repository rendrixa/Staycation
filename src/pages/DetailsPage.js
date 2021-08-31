import React, { Component } from "react";

import itemDetails from "json/itemDetails.json";

import Header from "parts/Header";
import Title from "parts/pageDetails/Title";
import FeaturedImage from "parts/pageDetails/FeaturedImage";
import Description from "parts/pageDetails/Description";
import BookingForm from "parts/pageDetails/BookingForm";
import Category from "parts/Category";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0, "smooooooooth");
	}

	render() {
		const breadcrumb = [
			{ pageTitle: "Home", href: "" },
			{ pageTitle: "Detail Page", href: "" },
		];

		return (
			<>
				<Header {...this.props} />
				<Title data={itemDetails} breadcrumb={breadcrumb} />
				<FeaturedImage data={itemDetails.imageUrls} />
				<section className="container">
					<div className="row">
						<div className="col-7">
							<Description data={itemDetails} />
						</div>
						<div className="col-5">
							<BookingForm itemDetail={itemDetails} />
						</div>
					</div>
				</section>
				<Category data={itemDetails.categories} />
				<Testimony data={itemDetails.testimonial} />
				<Footer />
			</>
		);
	}
}
