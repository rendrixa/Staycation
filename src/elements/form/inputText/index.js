import React, { useState } from "react";

import propTypes from "prop-types";
import "./index.scss";

export default function Text(props) {
	const {
		value,
		type,
		placeholder,
		name,
		append,
		prepend,
		innerClassName,
		outerClassName,
		errorResponse,
	} = props;

	const [hasError, setHasError] = useState(null);
	let pattern = "";
	if (type === "email")
		pattern =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (type === "tel") pattern = "^[0-9]{0,12}$";

	const onChange = (event) => {
		const target = {
			target: {
				name: name,
				value: event.target.value,
			},
		};

		if (type === "email") {
			if (!pattern.test(event.target.value)) setHasError(errorResponse);
			else setHasError(null);
		}

		if (type === "tel") {
			if (event.target.validity.valid) props.onChange(target);
		} else {
			props.onChange(target);
		}
	};

	return (
		<div className={["input-text mb-3", outerClassName].join(" ")}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-900">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					type={type}
					name={name}
					value={value}
					pattern={pattern}
					placeholder={placeholder}
					className={["form-control", innerClassName].join(" ")}
					onChange={onChange}
				/>
				{append && (
					<div className="input-group-append bg-gray-900">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
			{hasError && <span className="error-helper">{hasError}</span>}
		</div>
	);
}

Text.defaultProps = {
	type: "text",
	pattern: "",
	placeholder: "Please type here...",
	errorResponse: "Please match the request format.",
};

Text.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
	append: propTypes.oneOfType([propTypes.string, propTypes.number]),
	type: propTypes.string,
	placeholder: propTypes.string,
	innerClassName: propTypes.string,
	outerClassName: propTypes.string,
	errorResponse: propTypes.string,
};
