//              description={
//               <>
//                 <Link
//                   to="https://globaliotsummit.org/giots-2018-bilbao/"
//                   target="_blank"
//                   className="text-[#4A86E8] hover:text-[#3d72c9]"
//                 ></Link>
//                 &nbsp;
//               </>
//             }
// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
//       <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
//         <div className="flex items-center justify-between p-4">
//           <a
//             href="#"
//             className="text-lg font-semibold tracking-widest text-gray-900 uppercase dark:text-white focus:outline-none"
//           >
//             Flowtrail UI
//           </a>
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!isMenuOpen)}
//           >
//             <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//               {isMenuOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <nav
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } flex-col md:flex-row md:flex md:justify-end md:items-center pb-4 md:pb-0`}
//         >
//           <a
//             href="#"
//             // className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:bg-gray-200 focus:outline-none"
//             className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Blog
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Portfolio
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Contact
//           </a>
//           //////////
//           <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
//             <button
//               onClick={() => setDropdownOpen(!isDropdownOpen)}
//               className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//             >
//               <span>Dropdown</span>
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
//                   isDropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #2
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #3
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import DropdownMenuDemo, { DropDown } from "../dropdown/drop-down";
// import { FiMenu } from "react-icons/fi";

// const navlinkClass = "text-white px-5 py-2 hover:text-gray-300 inline-block";

// export default function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-headercolor sticky top-0 w-full h-14 flex justify-between items-center px-4 md:px-8">
//       {/* Left Section - Logo */}
//       <div className="text-white font-bold text-nowrap">
//         <Link to="/">Subhan Ullah (Ph.D)</Link>
//       </div>

//       {/* Center Section - Navigation Links (Hidden on Small Screens) */}
//       <div className="hidden md:flex space-x-4">
//         <NavLink className={navlinkClass} to="/">Home</NavLink>
//         <NavLink className={navlinkClass} to="/about">About</NavLink>
//         <NavLink className={navlinkClass} to="/Team">Team</NavLink>
//         <NavLink className={navlinkClass} to="/Research">Research</NavLink>
//         <NavLink className={navlinkClass} to="/Teaching">Teaching</NavLink>
//         <NavLink className={navlinkClass} to="/News">News</NavLink>
//         <NavLink className={navlinkClass} to="/extra">
//           <DropDown Dropdown="Dropdown" />
//         </NavLink>
//         <NavLink className={navlinkClass} to="/extra">
//           <DropdownMenuDemo />
//         </NavLink>
//       </div>

//       {/* Right Section - Search Bar & Mobile Menu Button */}
//       <div className="flex items-center space-x-4">
//         {/* Search Bar */}
//         <form className="hidden md:flex items-center bg-gradient-to-r from-black to-cyan-400 text-white p-1 rounded border border-white">
//           <input
//             className="bg-transparent text-inherit border-none outline-none placeholder:text-gray-300"
//             type="text"
//             placeholder="Search"
//           />
//           <button className="w-6 h-6 grid place-items-center cursor-pointer">
//             <i className="bi bi-search"></i>
//           </button>
//         </form>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-14 left-0 w-full bg-headercolor flex flex-col items-center space-y-2 py-4 md:hidden">
//           <NavLink className={navlinkClass} to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
//           <NavLink className={navlinkClass} to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
//           <NavLink className={navlinkClass} to="/Team" onClick={() => setMobileMenuOpen(false)}>Team</NavLink>
//           <NavLink className={navlinkClass} to="/Research" onClick={() => setMobileMenuOpen(false)}>Research</NavLink>
//           <NavLink className={navlinkClass} to="/Teaching" onClick={() => setMobileMenuOpen(false)}>Teaching</NavLink>
//           <NavLink className={navlinkClass} to="/News" onClick={() => setMobileMenuOpen(false)}>News</NavLink>
//           <NavLink className={navlinkClass} to="/extra" onClick={() => setMobileMenuOpen(false)}>
//             <DropDown Dropdown="Dropdown" />
//           </NavLink>
//           <NavLink className={navlinkClass} to="/extra" onClick={() => setMobileMenuOpen(false)}>
//             <DropdownMenuDemo />
//           </NavLink>
//           {/* Search Bar for Mobile */}
//           <form className="flex items-center bg-gradient-to-r from-black to-cyan-400 text-white p-1 rounded border border-white">
//             <input
//               className="bg-transparent text-inherit border-none outline-none placeholder:text-gray-300"
//               type="text"
//               placeholder="Search"
//             />
//             <button className="w-6 h-6 grid place-items-center cursor-pointer">
//               <i className="bi bi-search"></i>
//             </button>
//           </form>
//         </div>
//       )}
//     </nav>
//   );
// }

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import DropdownLink from "./DropdownLink"; // Adjust the import path as needed

// const navlinkClass = "text-white px-5 py-2 hover:text-gray-300 inline-block";

// export default function Header() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-headercolor sticky top-0 w-full h-14 flex space-x-4">
//       <div className="float-left p-4 text-white font-bold text-nowrap w-1/3">
//         <NavLink to="/">Subhan Ullah (Ph.D)</NavLink>
//       </div>
//       <div className="w-2/3 pt-1.5">
//         <div className="float-right">
//           <NavLink className={navlinkClass} to="/">
//             Home
//           </NavLink>
//           <NavLink className={navlinkClass} to="/about">
//             About
//           </NavLink>

//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none">
//               <span>Dropdown</span>
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
//                   isDropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800">
//                 <DropdownLink to="/link1" text="Link #1" />
//                 <DropdownLink to="/link2" text="Link #2" />
//                 <DropdownLink to="/link3" text="Link #3" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Navbar.js

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Extra = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

//   const toggleNav = () => {
//     setOpenNav(!openNav);
//     setOpenAvatarDropdown(false);
//   };

//   const toggleAvatarDropdown = () => {
//     setOpenAvatarDropdown(!openAvatarDropdown);
//   };

//   const navList = () => {
//     return (
//       <>
//         <NavLink
//           to="/"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/event"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Event
//         </NavLink>
//         <NavLink
//           to="/services"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Services
//         </NavLink>
//         <NavLink
//           to="/registration"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Registration
//         </NavLink>
//       </>
//     );
//   };

//   return (
//     <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
//       <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
//         <div className="flex items-center justify-between">
//           <a href="#" className="text-2xl font-semibold text-gray-800">
//             <img className="w-20" src="WellnessFusion.png" alt="" />
//           </a>
//           <button
//             onClick={toggleNav}
//             className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
//           >
//             <svg
//               className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//             <svg
//               className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4">{navList()}</nav>
//         <div
//           className={`${
//             openNav ? "" : "hidden"
//           } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
//         >
//           {navList()}
//         </div>
//         <div
//           onClick={toggleAvatarDropdown}
//           className="relative transition-all duration-500"
//         >
//           <span className="cursor-pointer">Avatar</span>
//           <div
//             className={`absolute ${
//               openAvatarDropdown ? "block" : "hidden"
//             } bg-slate-300 rounded shadow-md mt-2 space-y-2`}
//           >
//             <div className="p-4 flex flex-col ">
//               <NavLink to="/profile">Profile</NavLink>
//               <NavLink to="/dashboard">Dashboard</NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Extra;

// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
//     return {
//       fontWeight: isActive ? "normal" : "normal",
//       textDecoration: isActive ? "none" : "underline",
//       color: isActive ? "black" : "black",
//     };
//   };

//   const navlinkClass = "group justify-items-center pt-2 pb-1";
//   const iconClass =
//     "w-10 h-10 p-2 hover:bg-iconcolor group-[.active]:bg-iconcolor border-2 border-solid border-emeraldc rounded-xl";

//   return (
//     <nav className=" border-2 border-solid border-b-neutral-500">
//       <div className="primary-nav px-10 text-nowrap bg-white flex flex-col items-center sm:flex-row sm:justify-between">
//         <div
//           className="border-2 border-solid border-yellow-500 justify-items-center"
//           style={navLinkStyles({ isActive: true })}
//         >
//           <img src="/logo.png" alt="logo" />
//         </div>
//         <div className="sm:flex sm:space-x-20">
//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/employee-management"
//           >
//             <div className={iconClass}>
//               <img src="/usersIcon.ico" alt="User icon" />
//             </div>
//             Employees
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/atm-machines"
//           >
//             <div className={iconClass}>
//               <img src="/atmIcon.ico" alt="ATM icon" />
//             </div>
//             Machines
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/roster"
//           >
//             <div className={iconClass}>
//               <img src="/rosterIcon.ico" alt="Rosters Icon" />
//             </div>
//             Rosters
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/route-management"
//           >
//             <div className={iconClass}>
//               <img src="/routeIcon.ico" alt="Routes Icon" />
//             </div>
//             Routes
//           </NavLink>
//         </div>

//         <button style={navLinkStyles({ isActive: true })}>
//           Log Out
//         </button>
//       </div>
//     </nav>
//   );
// }
