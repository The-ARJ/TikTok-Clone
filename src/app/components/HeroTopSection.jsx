import React from "react";

const HeroTopSection = () => {
  return (
    <>
      <div className="md:mt-0 mx-2 mb-4 mt-10">
        <div className="flex items-center flex-row justify-between lg:items-center gap-4 lg:gap-8">
          <div className="text-md lg:text-2xl font-bold">Get Coins</div>
          <div className="text-xs lg:text-base font-smedium">
            View transaction history
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTopSection;
