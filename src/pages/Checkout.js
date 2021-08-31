import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Stepper, {
  Controller,
  MainContent,
  Meta,
  Numbering,
} from "elements/Stepper";

import BookingInformation from "parts/checkout/BookingInformation";
import Completed from "parts/checkout/Completed";
import Payment from "parts/checkout/Payment";

import Button from "elements/button";

import itemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
        // mengambil name dari input name dan disi dengan dari input value, dan data namenya di masukan ke dalam data
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0, "smooooooooth");
  }

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            itemDetails={itemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            itemDetails={itemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={currentStep} />

              <MainContent data={steps} current={currentStep} />

              {currentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.emailName !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          style={{ width: "100%" }}
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}>
                          Continue To Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    style={{ width: "100%" }}
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${itemDetails._id}`}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          style={{ width: "100%" }}
                          type="button"
                          isPrimary
                          isBlock
                          hasShadow
                          onClick={nextStep}>
                          Continue To Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    style={{ width: "100%" }}
                    type="link"
                    isBlock
                    isLight
                    onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "completed" && (
                <Fade>
                  <Controller>
                    <Button
                      className="btn"
                      style={{ width: "100%", paddingTop: "10px" }}
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href="/">
                      Back To Home
                    </Button>
                  </Controller>
                </Fade>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
