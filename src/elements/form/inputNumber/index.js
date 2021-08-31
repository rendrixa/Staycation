import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
		props;

	// const [inputValue, setInputValue] = useState(`${value}${prefix}${suffix}`); tidak digunkan

	const onChange = (e) => {
		let value = String(e.target.value);
		// if (prefix) value = value.replace(prefix);
		// if (suffix) value = value.replace(suffix);

		// const patternNumeric = new RegExp("[0-9]*");
		// const isNumeric = patternNumeric.test(value);
		// dengan mendeklarasikan is berarti nilai yang keluar merupakan boolean
		// tidak digunakan

		if (+value <= max && +value >= min) {
			props.onChange({
				target: {
					name: name,
					value: +value,
				},
			});
			// setInputValue(
			// 	`${value}${prefix}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
			// ); tidak digunakan
		}
	};

	const minus = () => {
		value > min &&
			onChange({
				target: {
					name: name,
					value: +value - 1,
				},
			});
	};

	const plus = () => {
		value < max &&
			onChange({
				target: {
					name: name,
					value: +value + 1,
				},
			});
	};

	return (
		<div className={["input-number mb-3", props.outerClassName].join(" ")}>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text minus" onClick={minus}>
						-
					</span>
				</div>
				<input
					min={min}
					max={max}
					name={name}
					readOnly
					placehoder={placeholder ? placeholder : "0"}
					value={`${prefix}${value}${suffix}${
						isSuffixPlural && value > 1 ? "s" : ""
					}`}
					className="form-control"
					onChange={onChange}
				/>
				<div className="input-group-append">
					<span className="input-group-text plus" onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}

Number.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

Number.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	isSuffixPlural: propTypes.bool,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
