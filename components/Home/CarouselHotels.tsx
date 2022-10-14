import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BrowseCard from "./BrowseCard";
import { HotelType } from "../../types";

interface IProps {
  hotels: HotelType[];
}
const CarouselHotels = ({ hotels }: IProps) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(
      carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth
    );
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="cursor-grab overflow-hidden relative my-5"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex py-8"
      >
        {hotels.map((item, index) => (
          <BrowseCard key={index} item={item} />
        ))}
      </motion.div>
      <div className="absolute w-32  py-9 h-full left-0 top-2">
        <div className="w-full h-full bg-gradient-to-r from-primary-300 to-primary-300/80 "></div>
      </div>
    </motion.div>
  );
};

export default CarouselHotels;
