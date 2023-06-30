"use client";
import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { GrAdd } from "react-icons/gr";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function initiateSwitch() {
    setIsMenu(false);
  }

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-white border shadow-gray-100 z-50  no-select ${
        isScrolled ? "" : ""
      } ${isMenu ? " border-b-2 border-b-[#ffffff1a]" : "glass-header"}`}
    >
      {/* Desktop and tablet */}
      <div className="hidden md:flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
        <Link
          href="/"
          className="flex items-center xl:gap-2 cursor-pointer relative"
        >
          <div className="relative transform transition duration-300 ">
            <img src="./assets/logo.png" className="h-14" />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center gap-4 ">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full bg-gray-100 px-4 py-2 pr-10 focus:outline-none w-[500px] h-[50px]"
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
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6 xl:gap-10 md:text-base  py-6 text-lg cursor-pointer uppercase ">
            <li className="transform transition duration-300 ">
              <Link href="/" className="flex">
                <button className="border border-gray-200 hover:bg-gray-100 px-4 py-2 flex items-center rounded-sm">
                  <GrAdd className=" font-bold" />
                  <p className="ml-2 font-medium">Upload</p>
                </button>
              </Link>
            </li>
            <li className="transform transition duration-300 ">
              <svg
                className="text-3xl"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                ></path>
              </svg>{" "}
            </li>
            <li className="transform transition duration-300 ">
              <Link href="#about">
                <svg
                  className="tiktok-1g0p6jv-StyledInboxIcon e18kkhh41 text-3xl"
                  width="40"
                  data-e2e=""
                  height="40"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                  ></path>
                </svg>
              </Link>
            </li>
            <Link href="/#contact" scroll={false}>
              <div className=" ">
                <img
                  src="./assets/pp.jpg"
                  className=" rounded-full h-10 w-10 object-cover"
                  alt=""
                />
              </div>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Responsive */}
      <div className="flex items-center justify-between md:hidden w-full px-2 h-14">
        <div className="relative transform transition duration-300 ">
          <img src="./assets/logo.png" className="h-10" />
        </div>

        {/* Menu Dropdown */}

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-2 xl:gap-10 md:text-base  py-6 text-xs cursor-pointer uppercase ">
            <li className="transform transition duration-300 ">
              <Link href="/" className="flex">
                <button className="border border-gray-200 hover:bg-gray-100 px-4 py-2 flex items-center rounded-sm">
                  <GrAdd className=" font-bold" />
                  <p className="ml-2 font-medium">Upload</p>
                </button>
              </Link>
            </li>
            <li className="transform transition duration-300 ">
              <svg
                className="text-2xl"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                ></path>
              </svg>{" "}
            </li>
            <li className="transform transition duration-300 ">
              <Link href="#">
                <svg
                  className="text-2xl"
                  width="40"
                  data-e2e=""
                  height="40"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                  ></path>
                </svg>
              </Link>
            </li>
            <Link href="#" scroll={false}>
              <div className=" ">
                <img
                  src="./assets/pp.jpg"
                  className=" rounded-full h-8 w-8 object-cover"
                  alt=""
                />
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
