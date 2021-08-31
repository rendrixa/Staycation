import React from "react";
import Star from "elements/star";
import Frame from "assets/images/frametesti.jpg";
import Button from "elements/button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <Fade left>
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: "30px 0 0 30px" }}>
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 2 }}
              />
              <img
                src={Frame}
                alt="Testimonial"
                className="position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-6">
            <h4 className="mb-3">{data.name}</h4>
            <Star
              key={data.id}
              value={data.rate}
              height={40}
              width={30}
              spacing={3}></Star>
            <p className="content-testimony">{data.content}</p>
            <span>
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-auto mt-5 disabled"
                isPrimary
                hasShadow
                type="link"
                href={`/testimonial/${data._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
