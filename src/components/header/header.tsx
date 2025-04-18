import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "../navigationMenu";

export default function Header() {
  return (
    <nav className="bg-headercolor sticky top-0 w-full h-14 flex space-x-4">
      <div className="float-left p-4 text-white font-bold text-nowrap w-1/3">
        <Link to="/">Subhan Ullah (Ph.D)</Link>
      </div>

      <div className="flex justify-end float-right w-2/3">
        <NavigationMenuDemo />
      </div>

      <div className="flex items-center float-left pr-6">
        <form className="flex items-center bg-gradient-to-r from-black to-cyan-800 text-white p-1 rounded border border-white">
          <input
            className="bg-transparent text-inherit border-none outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Search"
          />
          <button
            className="grid place-items-center w-6 h-6 cursor-pointer transition-colors duration-250"
            type="button"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}
