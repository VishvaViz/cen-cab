"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BugetCabCard from "./BugetCabCard"; // Adjust import based on your structure
import ThreeSeaterCar from "../assets/3-seater-car.png";
import FourSeaterCar from "../assets/4-seater-car.png";
import FiveSeaterCar from "../assets/5-seater-car.png";
import SixSeaterCar from "../assets/6-seater-car.png";

const cabs = [
  { title: "3 SEATER", image: ThreeSeaterCar },
  { title: "4 SEATER", image: FourSeaterCar },
  { title: "5 SEATER", image: FiveSeaterCar },
  { title: "6 SEATER", image: SixSeaterCar },
];

const BudgetCabCarousel = () => {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    handleScroll(); // Check scroll position on mount
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      setIsAtStart(carouselRef.current.scrollLeft === 0);
      setIsAtEnd(
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
      );
    }
  };

  // Scroll function
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-2 pb-11">
      {/* Carousel Container */}
      <motion.div
        ref={carouselRef}
        className="flex gap-6 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth"
        onScroll={handleScroll}
      >
        {cabs.map((cab, index) => (
          <motion.div
            key={index}
            className="p-[10px]"
            whileHover={{ scale: 1.05 }}
          >
            <BugetCabCard title={cab.title} image={cab.image} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom-Right Buttons */}
      <div className="absolute bottom-0 right-1 flex gap-2">
        <button
          className={`h-[35px] w-[35px] flex items-center justify-center rounded-full transition ${
            isAtStart ? "bg-[#ECECEC] cursor-not-allowed text-white" : "bg-[#00B0B099] text-white hover:bg-[#009090]"
          }`}
          onClick={() => scroll("left")}
          disabled={isAtStart}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`h-[35px] w-[35px] flex items-center justify-center rounded-full transition ${
            isAtEnd ? "bg-[#ECECEC] cursor-not-allowed text-white" : "bg-[#00B0B099] text-white hover:bg-[#009090]"
          }`}
          onClick={() => scroll("right")}
          disabled={isAtEnd}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BudgetCabCarousel;
