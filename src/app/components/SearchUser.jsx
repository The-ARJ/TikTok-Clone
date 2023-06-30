import React from "react";

const SearchUser = ({
  searchQuery,
  handleSearch,
  handleClick,
}) => {
  return (
    <>
      <div className="relative flex items-center md:mb-4 mx-2">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded-2xl bg-gray-100 px-4 py-2 pr-10 md:text-xl  focus:outline-none lg:w-[400px] lg:h-[55px]"
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
          className="py-4 rounded-xl flex items-center gap-2 md:text-xl cursor-pointer mx-2"
          onClick={handleClick}
        >
          <svg
            width="26"
            height="26"
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
    </>
  );
};

export default SearchUser;
