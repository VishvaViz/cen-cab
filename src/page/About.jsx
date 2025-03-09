import React from "react";
import BookButton from "../component/Button";
import Taxi from "../assets/taxi-img.png";
import PageTransition from "../component/PageTrasition";
import { slideFromLeft } from "../component/TrasitionAnimation";
import Footer from "../layouts/Footer";
export default function About() {
  return (
    <PageTransition
      variants={slideFromLeft}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="">
        <div className="p-[85px] w-full  flex-col space-y-[140px] hidden md:flex lg:flex">
          <div className="flex items-center gap-[20px]  ">
            <div className=" space-y-9">
              <h1 className="text-[32px] font-[500]">About Us</h1>
              <p className="text-wrap">
                Chennai cabs has been a trusted name in cab services,
                established in 2016, offering safe, reliable, and comfortable
                transportation for individuals and businesses alike. Whether you
                need a quick city ride, airport transfer, or long-distance
                travel, our well-maintained fleet and professional drivers
                ensure a seamless experience.
              </p>
              <p>
                In addition to personal rides, we specialize in providing
                transportation solutions for various business needs. From
                corporate travel and event transportation to client pickups and
                executive rides, we cater to businesses looking for dependable
                and professional cab services.
              </p>
              <p>
                At Chennai cabs, we prioritize punctuality, safety, and customer
                satisfaction, making every journey smooth and stress-free. Book
                with us today and experience top-tier service tailored to your
                needs.
              </p>
            </div>
          </div>
          <div className=" w-full p-[30px] flex space-x-[140px] items-center">
            <img src={Taxi} alt="Taxi" className="h-[350px] " />
            <div className="space-y-4 w-full bg">
              <h1 className="text-[32px] font-[500] ">Join now</h1>
              <p className="text-[14px]">
                Providing seamless transportation for the people who matter to
                your organization is effortless
              </p>
              <BookButton
                text={"Call now"}
                textSize={"18px"}
                w={"120px"}
                h={"35px"}
              />
            </div>
          </div>
        </div>

        {/* mobile screen */}
        <div className="flex flex-col gap-[20px] md:hidden lg:hidden">
          <div className="flex items-center gap-[20px] p-[20px]  ">
            <div className=" space-y-9">
              <h1 className="text-[22px] font-[500]">About Us</h1>
              <p className="text-wrap text-[12px]">
                Chennai cabs has been a trusted name in cab services,
                established in 2016, offering safe, reliable, and comfortable
                transportation for individuals and businesses alike. Whether you
                need a quick city ride, airport transfer, or long-distance
                travel, our well-maintained fleet and professional drivers
                ensure a seamless experience.
              </p>
              <p className="text-wrap text-[12px]">
                In addition to personal rides, we specialize in providing
                transportation solutions for various business needs. From
                corporate travel and event transportation to client pickups and
                executive rides, we cater to businesses looking for dependable
                and professional cab services.
              </p>
              <p className="text-wrap text-[12px]">
                At Chennai cabs, we prioritize punctuality, safety, and customer
                satisfaction, making every journey smooth and stress-free. Book
                with us today and experience top-tier service tailored to your
                needs.
              </p>
            </div>
          </div>
          <div className="p-[20px]">
            <div className=" w-full   flex flex-col gap-[30px] items-center">
              <img src={Taxi} alt="Taxi" className="h-[250px] " />
              <div className="space-y-4 w-full bg">
                <h1 className="text-[24px] font-[500] ">Join now</h1>
                <p className="text-[12px]">
                  Providing seamless transportation for the people who matter to
                  your organization is effortless
                </p>
                <BookButton
                  text={"Call now"}
                  textSize={"14px"}
                  w={"90px"}
                  h={"33px"}
                  onClick={() => (window.location.href = "tel:+91 9551114411")}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
