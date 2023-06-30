"use client";
import { useState, useEffect } from "react";
import PriceCards from "./PriceCards";
import RechargeDetail from "./RechargeDetail";
import ProfileCard from "./ProfileCard";

import HeroTopSection from "./HeroTopSection";
import CustomModal from "./CustomModal";
import PaymentModal from "./PaymentModal";
import SuccessModal from "./SuccessModal";
import SearchUser from "./SearchUser";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [totalDollar, setTotalDollar] = useState(0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleRechargeClick = (coin, price) => {
    setTotalDollar(price);
    setInputValue(coin);
    setIsPaymentModalOpen(true);
    setIsModalOpen(false);
  };
  const handleRecharge = () => {
    setIsPaymentModalOpen(true);
    setIsModalOpen(false);
  };

  const handlePaymentClick = () => {
    setIsPaymentModalOpen(false);
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  const handlePayCloseClick = () => {
    setIsSuccessModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleNumberClick = (number) => {
    if (number === "x") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (number === "C") {
      setInputValue("");
    } else {
      setInputValue((prevValue) => prevValue + number);
    }
  };
  useEffect(() => {
    // Conversion rate: 70 coins = 0.74 dollar
    const coinsToDollar = 0.74 / 70;
    let total = 0;
    if (inputValue !== "") {
      total = parseFloat(inputValue) * coinsToDollar;
    }
    setTotalDollar(total.toFixed(2));
  }, [inputValue]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayNowClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handlePaymentClick();
    }, 3000);
  };

  return (
    <>
      <section className="bg-cream ">
        {/* for rollsroyace */}

        <div className="max-w-screen-lg mx-auto bg-white ">
          <div className=" hidden md:fixed md:block  left-0 -z-50  ">
            <img
              src="./assets/rollsroyce.png"
              alt=""
              className=" h-[700px]  border rounded-lg"
            />
          </div>
          <HeroTopSection />
          <div className="flex flex-col  justify-center items-start lg:text-left">
            <SearchUser
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              handleClick={handleClick}
            />
            <RechargeDetail />
            <PriceCards
              HandleClick={handleClick}
              RechargeClick={handleRechargeClick}
            />
            {isModalOpen && (
              <CustomModal
                closeModal={closeModal}
                inputValue={inputValue}
                setInputValue={setInputValue}
                totalDollar={totalDollar}
                handleNumberClick={handleNumberClick}
                handleRecharge={handleRecharge}
              />
            )}
            {isPaymentModalOpen && (
              <PaymentModal
                closePaymentModal={closePaymentModal}
                inputValue={inputValue}
                totalDollar={totalDollar}
                handlePayNowClick={handlePayNowClick}
                isLoading={isLoading}
              />
            )}
            {isSuccessModalOpen && (
              <SuccessModal
                totalDollar={totalDollar}
                handlePayCloseClick={handlePayCloseClick}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
