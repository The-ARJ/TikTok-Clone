import React from "react";

const PaymentDetail = () => {
  return (
    <>
      <div className=" mt-4">
        <ul className="flex justify-center items-center gap-2">
          <li>
            <span
              data-e2e="wallet-title-payment-method"
              className="tiktok-p0hyyy-SpanTotalText e1ndw46o2"
            >
              Payment method
            </span>
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg"
              data-e2e="wallet-payment-icon-VISA"
              alt="Visa"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard-gray-update_7b3ceb.svg"
              data-e2e="wallet-payment-icon-MASTER"
              alt="Mastercard"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg"
              data-e2e="wallet-payment-icon-AMEX"
              alt="American Express"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_jcb_v1_be2294.svg"
              data-e2e="wallet-payment-icon-JCB"
              alt="JCB"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/diners_a3de24.svg"
              data-e2e="wallet-payment-icon-DINERS"
              alt="DINERS"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/maestro_188b29.svg"
              data-e2e="wallet-payment-icon-MAESTRO"
              alt="Maestro"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
          <li>
            <img
              src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/paypal-light-border_4305a4.svg"
              data-e2e="wallet-payment-icon-PAYPAL"
              alt="PAYPAL"
              className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5"
            />
          </li>
        </ul>
        <div className=" flex gap-4">
          <p>Total</p>
          <p className=" font-bold">$ 3.7</p>
        </div>
        <div className=" flex gap-4 mt-4">
          <button className=" bg-[#FE2C55] px-20 py-4 text-white rounded-lg font-medium">
            Recharge
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
