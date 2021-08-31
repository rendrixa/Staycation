import React from "react";
import Fade from "react-reveal/Fade";
import { InputText, InputFile } from "elements/form";

import LogoBca from "assets/images/icons/logo_bca.jpg";
import LogoMandiri from "assets/images/icons/logo_mandiri.jpg";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;

  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  // const total = grandTotal + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-3">Transfer Pembayaran :</p>
              <p>Tax: {tax}%</p>
              <p>Subtotal: ${subTotal} USD</p>
              <p>Total: $ {grandTotal} USD</p>
              <div className="row mt-3">
                <div className="col-3 text-right">
                  <img src={LogoBca} alt="logo-bca" width="60" />
                </div>
                <div className="col">
                  <p className="mb-0">BANK CENTRAL ASIA</p>
                  <p className="mb-0">6040 8 2002 12</p>
                  <p className="mb-0">Rendrix Aprilandri Guritno</p>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-3 text-right">
                  <img src={LogoMandiri} alt="logo-bca" width="60" />
                </div>
                <div className="col">
                  <p className="mb-0">BANK MANDIRI</p>
                  <p className="mb-0">6040 8 2002 12</p>
                  <p className="mb-0">Rendrix Aprilandri Guritno</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                type="text"
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                type="text"
                id="bankHolder"
                name="bankHolder"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
