import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/cen-cab-Logo.png";
import BookButton from "../component/Button";
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [contactScroll, setContactScroll] = React.useState(false);
  const navigate = useNavigate();
  console.log(isOpen);
  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else if (contactScroll) {
      document
        .getElementById("our-service")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isOpen, contactScroll]);
  return (
    <nav className="w-full flex justify-between items-center p-[15px]    ">
      <div className="block md:hidden lg:hidden">
        <span
          className="text-[10px] md:text-[14px] lg:text-[16px] "
          onClick={() => setIsOpen(true)}
        >
          <i className="fa fa-bars text-[25px]"></i>
        </span>
      </div>
      <div className="">
        <div className="w-[60px] md:w-[100px] lg:w-[120px]     ">
          <img
            src={Logo}
            alt="logo"
            className="h-[40px] md:h-[40px] lg:h-[60px] "
          />
        </div>
      </div>
      <div className="hidden md:block lg:block">
        <div className="">
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
              <Link
                to="/our-service"
                className="hover:font-bold cursor-pointer "
                onClick={() => {
                  setTimeout(() => {
                    document
                      .getElementById("our-service")
                      .scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
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
        <div></div>
      </div>
      <div className="block md:hidden lg:hidden">
        <BookButton
          text={"Contact us"}
          textSize={"14px"}
          w={"100px"}
          h={"30px"}
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sliding In */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-white shadow-md z-50 p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <img src={Logo} alt="logo" className="h-[40px]" />
        </div>
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa fa-times text-[20px]"></i>
        </button>
        <ul className="flex flex-col gap-5 text-[16px] mt-10">
          <li>
            <Link
              to="/"
              className="hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/our-service"
              className="hover:font-bold cursor-pointer"
              onClick={() => {
                setContactScroll(true);
                setIsOpen(false);
                setTimeout(() => {
                  document
                    .getElementById("our-service")
                    .scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
