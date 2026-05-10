import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "../navigationMenu";
import { Sidebar } from "../side-bar";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center w-full px-4 h-14 bg-headercolor">
      <div className="flex items-center gap-2 lg:hidden">
        <Sidebar />

        <Link to="/" className="font-bold text-white text-nowrap">
          Subhan Ullah (Ph.D)
        </Link>
      </div>

      <div className="hidden font-bold text-white lg:block text-nowrap">
        <Link to="/">Subhan Ullah (Ph.D)</Link>
      </div>

      <div className="justify-end flex-1 hidden lg:flex">
        <NavigationMenuDemo />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <form className="flex items-center p-1 text-white border border-white rounded bg-gradient-to-r from-black to-cyan-800">
          <input
            className="w-32 px-2 bg-transparent border-none outline-none text-inherit placeholder:text-gray-300"
            type="text"
            placeholder="Search"
          />
          <button
            className="grid w-6 h-6 transition-colors cursor-pointer place-items-center duration-250"
            type="button"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}
