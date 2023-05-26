import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="leading-normal flex text-xl bg-gray-100 md:text-2xl mb-8 gap-2 px-6 py-4 rounded-sm">
        <img
          src="./assets/pp.jpg"
          className="w-14 rounded-full h-14 object-cover"
          alt="tiktok"
        ></img>

        <div className="">
          <div className="text-base font-bold">Sheikh Alihab</div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg
              className="tiktok-kkwvro-StyledCoinIcon e4yj8b611"
              width="1em"
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
            <p className=" text-sm"> 796200</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
