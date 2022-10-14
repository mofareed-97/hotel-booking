import Image from "next/image";
import React from "react";

interface IProps {
  item: {
    hotelImage: string;
    categorie: string;
  };
}
const CategoriesCard = ({ item }: IProps) => {
  return (
    <article className="relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer group">
      <div className="relative h-full w-full group-hover:scale-110 group-hover:rotate-2 transition duration-1000">
        <div className="absolute h-full top-0 left-0 w-full bg-sky-500  opacity-20 z-10"></div>
        <div className="absolute h-full top-0 left-0 w-full bg-gradient-to-t from-black opacity-50 z-20"></div>
        <Image
          src={item.hotelImage}
          layout="fill"
          objectFit="cover"
          alt="wooden house"
        />
      </div>

      <h4 className="text-3xl tracking-wider whitespace-nowrap z-20 capitalize font-medium text-white absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        {item.categorie}
      </h4>
    </article>
  );
};

export default CategoriesCard;
