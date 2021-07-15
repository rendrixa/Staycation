import React from "react";

import ImageHero from "assets/images/picture.jpg";
import ImageHeroFrame from "assets/images/frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/button";
import NumberFormat from "react-number-format";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}

	return (
		<section className="container pt-5">
			<div className="row">
				<div className="col-lg-6 col-sm-6">
					<h1 className="text-dark mb-4" style={{ fontWeight: 700 }}>
						<Fade cascade left>
							Forget Busy Work,
						</Fade>
						<Fade cascade right>
							Start Next Vacation
						</Fade>
					</h1>
					<p className="text-gray-400 mb-4 w-50" style={{ fontWeight: 300 }}>
						We provide what you need to enjoy your holiday with family. Time to
						make another memorable moments.
					</p>
					<Button
						className="btn px-4 mb-3"
						hasShadow
						isPrimary
						onClick={showMostPicked}
					>
						Show Me Now
					</Button>

					<div className="row mt-5 mb-lg-0 mb-sm-5">
						<div className="col-auto">
							<img
								width="36"
								height="36"
								src={IconTraveler}
								alt={`${props.data.travelers} travelers`}
							/>
							<h6 className="mt-1">
								<NumberFormat
									value={props.data.travelers}
									displayType={"text"}
									thousandSeparator={true}
								/>{" "}
								<span style={{ fontWeight: 300 }}>Travelers</span>
							</h6>
						</div>
						<div className="col-auto">
							<img
								width="36"
								height="36"
								src={IconTreasure}
								alt={`${props.data.treasures} treasures`}
							/>
							<h6 className="mt-1">
								<NumberFormat
									value={props.data.treasures}
									displayType={"text"}
									thousandSeparator={true}
								/>{" "}
								<span style={{ fontWeight: 300 }}>Treasures</span>
							</h6>
						</div>
						<div className="col-auto">
							<img
								width="36"
								height="36"
								src={IconCities}
								alt={`${props.data.cities} cities`}
							/>
							<h6 className="mt-1">
								<NumberFormat
									value={props.data.cities}
									displayType={"text"}
									thousandSeparator={true}
								/>{" "}
								<span style={{ fontWeight: 300 }}>Cities</span>
							</h6>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-sm-6 ps-5 pt-3">
					<img
						className="img-fluid img-hero position-absolute"
						src={ImageHero}
						alt="lalla"
						style={{ margin: "-20px 0px 0px -20px" }}
					/>
					<img
						className="img-fluid frame position-absolute"
						src={ImageHeroFrame}
						alt="lalla"
					/>
				</div>
			</div>
		</section>
	);
}
