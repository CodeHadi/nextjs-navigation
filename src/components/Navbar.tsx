import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center space-x-7 text-3xl font-semibold bg-black text-white p-5 tracking-wide">
        <Link className=" hover:text-gray-400" href="/">
          Home
        </Link>
        <Link className=" hover:text-gray-400" href="/About">
          About
        </Link>
        <Link className=" hover:text-gray-400" href="/Contact">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
