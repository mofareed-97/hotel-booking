import Image from "next/image";
import React from "react";
import { HotelType } from "../../types";
import { motion } from "framer-motion";

interface IProps {
  item: HotelType;
}
const BrowseCard = ({ item }: IProps) => {
  return (
    <motion.div className="min-h-[500px] min-w-[300px] flex flex-col gap-6 bg-transparent rounded-2xl p-3 overflow-hidden group group-hover:bg-white hover:shadow-xl easeHover">
      <div className="relative h-2/4 w-full rounded-2xl overflow-hidden">
        <Image
          src={item.hotelImage}
          layout="fill"
          objectFit="cover"
          alt="wooden house"
        />
      </div>

      <h4 className="font-bold text-gray-600 text-2xl">{item.title}</h4>
      <div className="flex items-center justify-between font-medium text-sm">
        <p className="capitalize text-gray-500 ">{item.location}</p>

        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="">{item.rating}</span>
        </div>
      </div>

      <p className="text-2xl text-gray-600 font-bold">
        ${item.price}{" "}
        <span className="text-lg font-medium text-gray-400">/Night</span>
      </p>

      <button className="bg-secondary-50 text-gray-700 py-4 w-full rounded-full font-medium opacity-0 group-hover:opacity-100 hover:bg-secondary-200 easeHover">
        View Availability
      </button>
    </motion.div>
  );
};

export default BrowseCard;
