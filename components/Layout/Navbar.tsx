import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container py-6 flex items-center justify-between">
        <h3 className="text-3xl text-secondary-100 font-medium">HUNI</h3>
        <div className="flex items-center gap-20">
          <Link href="">
            <a>Home</a>
          </Link>
          <Link href="">
            <a>Explore</a>
          </Link>
          <Link href="">
            <a>Facliteis</a>
          </Link>
          <Link href="">
            <a>About Us</a>
          </Link>
        </div>

        <button className="text-secondary-500 font-bold border-2 border-secondary-500 px-14 py-2 rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
