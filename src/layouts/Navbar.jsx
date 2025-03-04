import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/cen-cab-Logo.png";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-[15px]  ">
      <div className="">
        <div className="w-[120px]  ">
          <img src={Logo} alt="logo" className="h-[60px]  " />
        </div>
      </div>
      <div className="">
        <div calssName="">
          <ul className="flex gap-12 text-[10px] md:text-[14px] lg:text-[16px] ">
            <li>
              <Link to="/" className="hover:font-bold ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:font-bold ">
                About Us{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-bold ">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-bold ">
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
