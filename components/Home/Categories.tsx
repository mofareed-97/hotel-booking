import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const dummy = [
    {
      hotelImage: "/imgs/apartment.jpg",
      categorie: "apartement",
    },
    {
      hotelImage: "/imgs/house.jpg",
      categorie: "boarding house",
    },
    {
      hotelImage: "/imgs/hotel-1.jpg",
      categorie: "hotels",
    },
    {
      hotelImage: "/imgs/villa.jpg",
      categorie: "villa",
    },
  ];
  return (
    <div className="pt-16">
      <h3 className="sectionTitle">Find the best lodging</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-12 gap-8">
        {dummy.map((item) => (
          <CategoriesCard key={item.categorie} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
