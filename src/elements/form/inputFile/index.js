import React, { useRef } from "react";
import propTypes from "prop-types";

export default function File(props) {
	const {
		name,
		value,
		placeholder,
		innerClassName,
		outerClassName,
		accept,
		prepend,
		append,
	} = props;

	const refInputFile = useRef(null);
	return (
		<div className={["input-text mb-3", outerClassName].join(" ")}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-900">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					accept={accept}
					ref={refInputFile}
					value={value}
					name={name}
					className="d-none"
					type="file"
					onChange={props.onChange}
				/>
				<input
					onClick={() => refInputFile.current.click()}
					defaultValue={value}
					placeholder={placeholder}
					className={["form-control", innerClassName].join(" ")}
				/>
				{append && (
					<div className="input-group-append bg-gray-900">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
		</div>
	);
}

File.defaultProps = {
	placeholder: "Browse a file..",
};

File.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.string.isRequired,
	accept: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
	append: propTypes.oneOfType([propTypes.string, propTypes.number]),
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	innerClassName: propTypes.string,
};
