import React from "react";

import Fade from "react-reveal/Fade";
import Breadcrumb from "elements/Breadcrumb";

export default function Title({ data, breadcrumb }) {
	return (
		<section className="container pt-5">
			<div className="row align-items-center">
				<div className="col">
					<Breadcrumb data={breadcrumb} />
				</div>
				<div className="col-auto text-center">
					<Fade bottom>
						<h1 className="h2">{data.name}</h1>
						<span className="text-gray-400">
							{data.city}, {data.country}
						</span>
					</Fade>
				</div>
				<div className="col"></div>
			</div>
		</section>
	);
}
