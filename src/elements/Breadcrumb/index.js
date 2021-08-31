import React from "react";

import "./index.scss";
import propTypes from "prop-types";
import Button from "elements/button";

export default function Breadcrumb(props) {
	return (
		<nav aria-label="breadcrumb">
			{/* <ol className={className.join(" ")}> */}
			<ol className="breadcrumb">
				{props.data.map((item, index) => {
					return (
						<li
							key={index}
							className={`breadcrumb-item${
								index === props.data.length - 1 ? " active" : ""
							}`}
						>
							{index === props.data.length - 1 ? (
								item.pageTitle
							) : (
								<Button type="link" href={item.pageHref}>
									{item.pageTitle}
								</Button>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

Breadcrumb.propTypes = {
	data: propTypes.array,
	className: propTypes.string,
};
