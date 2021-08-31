import Button from "elements/button";
import React from "react";
import Fade from "react-reveal/Fade";

export default function Category({ data }) {
  return data.map((category, index1) => {
    return (
      <Fade key={index1}>
        <section className="container" key={index1}>
          <div className="title-section text-dark mb-3">
            <h4>{category.name}</h4>
          </div>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <Fade bottom delay={200 * index2} key={index2}>
                    <div className="item column-3 row-1" key={index2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag" style={{ fontWeight: 500 }}>
                            Popular{" "}
                            <span style={{ fontWeight: 300 }}>Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-blok">
                            <h5
                              className="meta-text"
                              style={{ fontWeight: 400 }}>
                              {item.name}
                            </h5>
                          </Button>
                          <span className="text-gray-400">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </section>
      </Fade>
    );
  });
}
