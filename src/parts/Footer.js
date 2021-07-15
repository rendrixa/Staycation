import React from "react";
import Button from "elements/button";
import LogoText from "./LogoText";

export default function Footer() {
	return (
		<footer className="container">
			<div className="row">
				<div className="col-auto " style={{ width: 400 }}>
					<LogoText />
					<p className="tagline">
						We kaboom your beauty holiday instantly and memorable.
					</p>
				</div>
				<div className="col-2 ms-5 mr-3">
					<h4 className="mb-3">For Beginners</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href="/account">
								New Account
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/booking">
								Start Booking a Room
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/payment">
								Use Payments
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-2 mr-3">
					<h4 className="mb-3">Explore Us</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href="/career">
								Our Careers
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/privacy">
								Privacy
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/terms">
								Terms & Conditions
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-auto">
					<h4 className="mb-3">Connect Us</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button
								type="link"
								isExternal
								href="mailto:support@staycation.id"
							>
								support@staycation.id
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" isExternal href="tel:+622122081996">
								021 - 2208 - 1996
							</Button>
						</li>
						<li className="list-group-item">
							<span>Staycation, Kemang, Jakarta</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col text-center copyright">
					<span>
						Copyright {new Date().getFullYear()} • All rights reserved •
						Staycation
					</span>
				</div>
			</div>
		</footer>
	);
}
