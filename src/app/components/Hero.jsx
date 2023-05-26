"use client";
import { useState, useEffect } from "react";
import PriceCards from "./PriceCards";
import PaymentDetail from "./PaymentDetail";
import Recharge from "./Recharge";
import ProfileCard from "./ProfileCard";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [totalDollar, setTotalDollar] = useState(0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  return (
    <>
      <section className="bg-cream -z-50">
        <div className="max-w-screen-xl mx-auto flex items-start">
          {/* Left Col */}
          <div className="flex flex-col  justify-center items-start lg:text-left">
            <div className=" flex lg:gap-[1000px] justify-between items-center">
              <div
                className="md:my-10 text-2xl font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                Get Coins
              </div>
              <div className="font-semibold" style={{ whiteSpace: "nowrap" }}>
                View transaction history
              </div>
            </div>
            <ProfileCard />
            <div className="relative flex items-center mb-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="border rounded-xl bg-gray-100 px-4 py-2 pr-10  focus:outline-none w-[300px] h-[50px]"
              />
              <button
                type="submit"
                aria-label="Search"
                data-e2e="search-button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="rgba(22, 24, 35, .34)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                  ></path>
                </svg>
              </button>
            </div>
            {searchQuery && (
              <div
                className="py-4 rounded-xl flex gap-2 mb-2 cursor-pointer"
                onClick={handleClick}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="rgba(22, 24, 35, .34)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                  ></path>
                </svg>
                {searchQuery}
              </div>
            )}
            <Recharge />
            <PriceCards />
            <PaymentDetail />
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white border border-gray-300 py-6 px-8 rounded-xl w-[700px]">
                  <div className="flex justify-end">
                    <button
                      onClick={closeModal}
                      className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out focus:outline-none"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.414 10l4.293-4.293a1 1 0 10-1.414-1.414L10 8.586 5.707 4.293a1 1 0 10-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-2xl text-center font-bold mb-6">
                    Custom
                  </h2>
                  <hr className="mb-6" />
                  <div className="flex items-center gap-2 border rounded-xl bg-gray-100 px-4 py-2 mb-4">
                    <svg
                      className="h-10 w-10"
                      width=""
                      data-e2e=""
                      height="1em"
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
                    </svg>{" "}
                    <input
                      type="text"
                      placeholder="Enter value"
                      className="bg-transparent focus:outline-none w-full"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-4 items-center">
                    {[1, 2, 3, "x", 4, 5, 6, 0, 7, 8, 9, "C"].map((number) => (
                      <button
                        key={number}
                        className="border rounded-lg bg-gray-100 font-semibold text-lg px-4 py-4"
                        onClick={() => handleNumberClick(number)}
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                  <p className="mb-2">Total: ${totalDollar}</p>
                  <button className="bg-[#FE2C55] text-white text-center px-6 py-3 rounded-lg text-xl w-full">
                    Recharge
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
