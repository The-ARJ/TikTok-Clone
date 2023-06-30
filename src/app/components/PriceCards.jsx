import React, { useState } from "react";

const PriceCards = ({ RechargeClick, HandleClick }) => {
  const cardData = [
    {
      coin: 70,
      price: "0.74",
    },
    {
      coin: 350,
      price: "3.7",
    },
    {
      coin: 700,
      price: "7.4",
    },
    {
      coin: 1400,
      price: "14.8",
    },
    {
      coin: 3500,
      price: "37",
    },
    {
      coin: 7000,
      price: "74",
    },
    {
      coin: 17500,
      price: "185",
    },
    {
      coin: "Custom",
      price: "Large amount supported",
    },
  ];

  const [total, setTotal] = useState(0);
  const [totalcoin, setTotalCoin] = useState(0);

  const handleCardClick = (coin, price) => {
    if (coin === "Custom") {
      HandleClick(); // Trigger the handleClick function
    } else {
      setTotalCoin(parseFloat(coin));
      setTotal(parseFloat(price));
    }
  };

  const handleRecharge = () => {
    RechargeClick(totalcoin, total);
  };

  return (
    <>
<div className="px-2 grid cursor-pointer grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-10 mt-4 justify-center mx-auto">
  {cardData.slice().reverse().map((card, index) => (
    <div
      className="w-full flex flex-col items-center py-4 px-8 md:px-20 md:py-10 border border-gray-200 hover:border-yellow-400 hover:border-2 rounded-md"
      key={index}
      onClick={() => handleCardClick(card.coin, card.price)}
    >
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                className=" h-6
                 w-6 md:h-10 md:w-10"
                width=""
                data-e2e=""
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                  fill="#FABC15"
                ></path>
                <path
                  d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                  fill="#FEF5CD"
                ></path>
              </svg>
              <p className=" text-lg md:text-2xl text-black font-bold">
                {typeof card.coin === "number"
                  ? card.coin.toLocaleString()
                  : card.coin}
              </p>
            </div>
            <p
              className="text-gray-500 mt-2  font-semibold"
              style={{ whiteSpace: "nowrap" }}
            >
              $ {card.price}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 px-4">
        <p className="">Payment method</p>
        <ul className="flex justify-center items-center gap-2">
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
        {/* <div className="flex gap-4">
          <p>Total Coins</p>
          <p className="font-bold">{totalcoin.toFixed(2)}</p>
        </div> */}
        <div className="flex gap-4 mt-2">
          <p>Total Price</p>
          <p className="font-bold">$ {total.toFixed(2)}</p>
        </div>
        <div className="flex gap-4 mt-4 justify-center items-center ">
          <button
            onClick={handleRecharge}
            className="bg-[#FE2C55] text-center mb-10  px-10 md:px-20 py-3 w-full md:py-4 text-white rounded-lg "
          >
            Recharge
          </button>
          <button
            aria-label="FAQ"
            className="fixed bottom-0 md:bottom-6 right-6 bg-gray-100 text-black text-2xl px-2 py-2 rounded-full"
          >
            <svg
              className="tiktok-ze008l-StyledQnMarkIcon e17zolsy3"
              width="1em"
              data-e2e=""
              height="1em"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceCards;
