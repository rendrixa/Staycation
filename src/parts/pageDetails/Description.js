import React from "react";
import HTMLReactParser from "html-react-parser";

export default function Description({ data }) {
	return (
		<main>
			<h5>About This Place</h5>
			{HTMLReactParser(data.description)}
			<div className="row" style={{ marginTop: 30 }}>
				{data.features.map((feature, index) => {
					return (
						<div key={index} className="col-3 mb-2">
							<img
								className="d-block mb-1"
								src={feature.imageUrl}
								alt={feature.name}
								width="38"
							/>
							<span>{feature.qty}</span>{" "}
							<span style={{ fontWeight: 300 }}>{feature.name}</span>
						</div>
					);
				})}
			</div>
		</main>
	);
}
