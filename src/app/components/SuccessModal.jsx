import React from "react";
import success from "../../../public/assets/success.json";
import Lottie from "lottie-react";
const SuccessModal = ({ totalDollar, handlePayCloseClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 md:px-0 px-2">
      <div className="bg-white border border-gray-300 py-6 px-8 rounded-xl w-[700px]">
        <div className="flex items-center justify-center mb-8">
          <Lottie animationData={success} className="h-24" />
        </div>
        <div className="text-center mb-4 text-xl md:text-3xl mt-8">
          <p>Payment Completed</p>
        </div>

        <div className="text-center mb-8 p-2 text-xs md:text-sm">
          <p className="">You recharged ${totalDollar} to Client Account</p>
          <p className="">You can use coins to send virtual Gifts </p>
        </div>

        <div className="flex gap-2">
          <button
            aria-label="FAQ"
            className="bottom-6 right-6 text-black text-2xl px-2 py-2 rounded-full"
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
          <button
            onClick={handlePayCloseClick}
            className="bg-[#FE2C55] text-white text-center px-6 py-3 rounded-lg md:text-xl w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
