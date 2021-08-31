import React from "react";
import Fade from "react-reveal/Fade";
import CompletedImages from "assets/images/completed.jpg";

export default function Completed() {
	return (
		<Fade>
			<section className="container mb-4">
				<div className="row justify-content-center align-items-center">
					<div className="col-4">
						<img
							src={CompletedImages}
							alt="images-completed"
							className="img-fluid"
						/>
						<p className="text-gray-400" style={{ textAlign: "center" }}>
							We will inform you via email later <br /> once the transaction has
							been accepted
						</p>
					</div>
				</div>
			</section>
		</Fade>
	);
}
