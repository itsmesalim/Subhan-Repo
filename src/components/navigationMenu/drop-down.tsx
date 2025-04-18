
import { useState } from "react";
import PageLink from "../link/link";

interface DropDownProps {
  Dropdown: string;
}

export function DropDown({ Dropdown }: DropDownProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="flex border-red-700 items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none">
        <span>{Dropdown}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800">
          <PageLink linkTo="/" text="Home Page" />
          <PageLink linkTo="/about" text="About Page" />
          <PageLink linkTo="/contact" text="Contact Page" />
        </div>
      )}
    </div>
  );
}
