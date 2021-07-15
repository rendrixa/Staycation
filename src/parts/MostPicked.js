import React from "react";
import NumberFormat from "react-number-format";
import Button from "elements/button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
	return (
		<Fade>
			<section className="container" ref={props.refMostPicked}>
				<div className="title-section text-dark">
					<h4>Most Picked</h4>
				</div>
				<div className="container-grid">
					{props.data.map((item, index) => {
						return (
							<Fade bottom delay={100 * index}>
								<div
									key={index}
									className={`item column-4 ${
										index === 0 ? " row-2" : " row-1"
									}`}
								>
									<div className="card card-featured">
										<div className="tag">
											<NumberFormat
												value={item.price}
												displayType={"text"}
												thousandSeparator={true}
												className="text-price"
											/>{" "}
											<span style={{ fontWeight: 300 }}>{item.unit}</span>
										</div>
										<figure className="img-wrapper">
											<img
												src={item.imageUrl}
												alt={item.name}
												className="img-cover"
											/>
										</figure>
										<div className="meta-wrapper">
											<Button
												type="link"
												className="stretched-link d-block text-white"
												href={`/properties/${item._id}`}
											>
												<h5 style={{ color: "white" }}>{item.name}</h5>
											</Button>
											<span>
												{item.city}, {item.country}
											</span>
										</div>
									</div>
								</div>
							</Fade>
						);
					})}
				</div>
			</section>
		</Fade>
	);
}
