import React from "react";
import Fade from "react-reveal/Fade";

import propTypes from "prop-types";

import "./index.scss";

export default function Numbering({ data, current, className, style }) {
	const keysOfData = Object.keys(data);
	return (
		<Fade>
			<ol className={["stepper", className].join(" ")} style={style}>
				{keysOfData.map((list, index) => {
					let isActive = list === current ? "active" : "";
					if (index + 1 === keysOfData.length) {
						isActive = "";
						return null;
					}

					return (
						<li key={index} className={[isActive].join(" ")}>
							{index + 1}
							{/* + 1 karena index= array 0 */}
						</li>
					);
				})}
			</ol>
		</Fade>
	);
}

Numbering.propTypes = {
	data: propTypes.object,
	className: propTypes.string,
	current: propTypes.string,
};
