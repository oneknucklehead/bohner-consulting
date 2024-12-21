import React from "react";
import { Link } from "react-scroll";

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};

const Card = ({ img, title, description, to }) => {
  return (
    // <div className="max-w-sm hover:shadow-lg transition-all h-full bg-white border-2 border-gray-200 rounded-lg shadow ">
    //   <div className="flex w-full max-h-72 overflow-hidden">
    //     <img
    //       className="rounded-t-lg w-full h-full object-cover object-right-bottom"
    //       src={img}
    //       alt="main image"
    //     />
    //   </div>
    //   <div className="p-5">
    //     <h1 className="mb-2 text-2xl font-semibold tracking-tight text-[#095DAB]">
    //       {title}
    //     </h1>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {truncateText(description, 19)}
    //     </p>
    //     <Link
    //       to={to}
    //       className="transition-all w-full flex justify-between items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-[#095DAB] rounded-lg hover:bg-[#095DAB]/90 "
    //     >
    //       <p>Scroll button</p>
    //       <span>
    //         <svg
    //           width="13"
    //           height="16"
    //           viewBox="0 0 13 16"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9L12 9V7L0 7L0 9Z"
    //             fill="white"
    //           />
    //         </svg>
    //       </span>
    //     </Link>
    //   </div>
    // </div>

    <div className="transition-all cursor-pointer hover:shadow-lg w-full h-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg max-h-[200px] w-full object-cover"
        src={img}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-sm text-gray-700 ">
          {truncateText(description, 19)}
        </p>
        <Link
          to={to}
          className="inline-flex items-center justify-between px-3 py-2 w-full text-sm text-center text-white bg-blue-700 rounded-lg"
        >
          Scroll to
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
