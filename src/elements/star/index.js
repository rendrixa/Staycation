import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Star({ className, value, width, height, spacing }) {
  const decimal = Number(value) % 1;

  const star = [];

  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={index}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }
  if (decimal > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        style={{
          left: leftPos,
          height: height,
          width: decimal * width - spacing,
        }}></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }

  return (
    <>
      <div
        className={[`stars`, className].join(" ")}
        style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
