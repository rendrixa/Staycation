import React, { Component } from "react";

// import { InputDate } from "elements/form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
	// state = {
	// 	value: {
	// 		startDate: new Date(),
	// 		endDate: new Date(),
	// 		key: "selection",
	// 	},
	// };

	// handleChange = (e) => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// };

	render() {
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "House Details", pageHref: "" },
		];

		return (
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-auto">
						<Breadcrumb data={breadcrumb} />
					</div>
				</div>
			</div>
		);
	}
}

// {
// 	/* <Number
// 							max={30}
// 							suffix=" night"
// 							isSuffixPlural
// 							onChange={this.handleChange}
// 							name="value"
// 							value={this.state.value}
// 						/> */
// }
