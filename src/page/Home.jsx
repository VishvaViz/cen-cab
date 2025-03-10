import React from "react";
import OurServiceCard from "../component/OurServiceCard";
import TrafficView from "../assets/home-car-view.png";
import OneTripCar from "../assets/one-trip-car.png";
import LocalTripCar from "../assets/local-trip-car.png";
import RoundTripCar from "../assets/round-trip-car.png";
import WeddingTripCar from "../assets/wedding-trip-car.png";
import ThreeSeaterCar from "../assets/3-seater-car.png";
import FourSeaterCar from "../assets/4-seater-car.png";
import FiveSeaterCar from "../assets/5-seater-car.png";
import SixSeaterCar from "../assets/6-seater-car.png";
import Logo from "../assets/cen-cab-Logo.png";
import BussinessGroup from "../assets/business-group.png";
import BookButton from "../component/Button";
import BugetCabCard from "../component/BugetCabCard";
// import BookButton from "../component/Button";
import Taxi from "../assets/taxi-img.png";
import About from "./About";
import Footer from "../layouts/Footer";
import BudgetCabCarousel from "../component/BugetCabCarousel";
import { fadeSlideUp } from "../component/TrasitionAnimation";

import PageTransition from "../component/PageTrasition";

import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <PageTransition
     variants={fadeSlideUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="space-y-[140px] ">
        {/* desktop screen*/}
        <div className="w-full h-full md:flex lg:flex flex-col space-y-[140px] pl-[85px] pr-[85px] hidden ">
          <div className=" h-[500px] flex justify-between items-center">
            <div>
              <img
                src={TrafficView}
                alt="Traffic View"
                className="h-[350px] "
              />
            </div>
            <div className="">
              <h1 className="text-[45px] font-[500] ">Ride now</h1>
              <BookButton
                text={"Book Ride"}
                textSize={"18px"}
                w={"120px"}
                h={"35px"}
                onClick={() => navigate("/contact")}
              />
            </div>
            <div />
          </div>

          <div
            className="h-[500px] w-full  flex flex-col gap-[50px]   "
            id="our-service"
          >
            <div className="space-y-4">
              <h1 className="font-[600] text-[32px]">Our service</h1>
              <p>Flexible and reliable Cab service for every needs</p>
            </div>
            <div className="pl-[50px]">
              <div className=" grid grid-cols-1 md:grid-cols-2  gap-y-10">
                <OurServiceCard title="One Way Trip" image={OneTripCar} />
                <OurServiceCard title="Local Trip" image={LocalTripCar} />
                <OurServiceCard title="Round Trip" image={RoundTripCar} />
                <OurServiceCard title="Wedding Trip" image={WeddingTripCar} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[20px]  ">
            <div className="w-[50%] space-y-9">
              <h1 className="text-[32px] font-[500] ">About Us</h1>
              <p className="text-wrap">
                Chennai cabs has been a trusted name in cab services,
                established in 2016, offering safe, reliable, and comfortable
                transportation for individuals and businesses alike. Whether you
                need a quick city ride, airport transfer, or long-distance
                travel, our well-maintained fleet and professional drivers
                ensure a seamless experience.
              </p>
              <BookButton
                text={"Learn more"}
                textSize={"18px"}
                w={"120px"}
                h={"35px"}
              />
            </div>
            <div className=" p-[30px]">
              <img src={Taxi} alt="Taxi" className="h-[350px] " />
            </div>
          </div>
          <div className="h-[500px] w-full  flex flex-col gap-[50px]  ">
            <div className="space-y-4">
              <h1 className="font-[600] text-[32px]">Budget cabs</h1>
              <p>
                Find the perfect ride for your trip, your style, and your
                budget.
              </p>
            </div>
            <div className="pl-[50px] flex gap-x-6">
              <BugetCabCard title="3 SEATER" image={ThreeSeaterCar} />
              <BugetCabCard title="4 SEATER" image={FourSeaterCar} />
              <BugetCabCard title="5 SEATER" image={FiveSeaterCar} />
              <BugetCabCard title="6 SEATER" image={SixSeaterCar} />
            </div>
          </div>
          <div className="w-full h-[500px] flex flex-col justify-center items-center gap-[30px] ">
            <img src={Logo} alt="Logo" className="h-[79px] " />
            <h1 className="font-[600] text-[32px]">Business</h1>
            <p className="text-[14px]">We help move People.</p>
            <p className="text-[14px]">
              We specialize in providing transportation solutions for various
              business needs.
            </p>
            <BookButton
              text={"CONTACT US"}
              textSize={"16px"}
              w={"130px"}
              h={"30px"}
              onClick={() => navigate("/contact")}
            />
            <div>
              <img
                src={BussinessGroup}
                alt="Traffic View"
                className="h-[250px] "
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block md:block">
          <Footer />
        </div>
        {/* mobile screen*/}
        <div className="mt-[25px] sm:flex flex flex-col gap-[100px]  lg:hidden md:hidden ">
          <div className=" w-full flex flex-col gap-[20px]  items-center pl-[20px] pr-[20px]">
            <div>
              <img
                src={TrafficView}
                alt="Traffic View"
                className="h-[220px]"
              />
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <h1 className="text-[26px] font-[500] ">Ride now</h1>
              <BookButton
                text={"Book Ride"}
                textSize={"14px"}
                w={"120px"}
                h={"30px"}
                onClick={() => navigate("/contact")}
              />
              <h1 className="text-[12px]">Wherever you go, well help you.</h1>
            </div>
          </div>

          <div className=" w-full flex flex-col  items-center gap-[15px] pl-[20px] pr-[20px]">
            <div className="space-y-4">
              <h1 className="font-[500] text-[20px]">Our service</h1>
              <p className="text-[12px]">
                Flexible and reliable Cab service for every needs
              </p>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <OurServiceCard title="One Way Trip" image={OneTripCar} />
              <OurServiceCard title="Local Trip" image={LocalTripCar} />
              <OurServiceCard title="Round Trip" image={RoundTripCar} />
              <OurServiceCard title="Wedding Trip" image={WeddingTripCar} />
            </div>
          </div>
          <div className=" w-full flex flex-col items-center pl-[20px] pr-[20px]">
            <div className="flex flex-col   ">
              <div className=" space-y-6">
                <h1 className="text-[20px] font-[500] ">About Us</h1>
                <p className="text-wrap text-[13px]">
                  Chennai cabs has been a trusted name in cab services,
                  established in 2016, offering safe, reliable, and comfortable
                  transportation for individuals and businesses alike. Whether
                  you need a quick city ride, airport transfer, or long-distance
                  travel, our well-maintained fleet and professional drivers
                  ensure a seamless experience.
                </p>
                <div className="flex justify-end">
                  <BookButton
                    text={"Learn more"}
                    textSize={"14px"}
                    w={"120px"}
                    h={"30px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex pl-[20px] pr-[20px]">
            <BudgetCabCarousel />
          </div>
          <div className="w-full flex flex-col items-center pl-[20px] pr-[20px]">
            <div className="w-full  flex flex-col justify-center items-center gap-[20px] ">
              <div className="flex  items-center gap-[10px]">
                <h1 className="font-[500] text-[20px]">Business</h1>
                <img src={Logo} alt="Logo" className="h-[19px] " />
              </div>
              <p className="text-[12px]">We help move People.</p>
              <p className="text-[12px] text-center">
                We specialize in providing transportation solutions for various
                business needs.
              </p>
              <BookButton
                text={"CONTACT US"}
                textSize={"12px"}
                w={"150px"}
                h={"30px"}
                onClick={() => navigate("/contact")}
              />
              <div>
                <img
                  src={BussinessGroup}
                  alt="Traffic View"
                  className="h-[120px] "
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
