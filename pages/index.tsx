import type { NextPage } from "next";
import BrowseCard from "../components/Home/BrowseCard";
import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import RegisterBox from "../components/Home/RegisterBox";

const dummy = [
  {
    hotelImage: "/imgs/apartment.jpg",
    title: "California Hotel",
    price: 150,
    rating: 4.5,
    location: "kota malang",
  },
  {
    hotelImage: "/imgs/house.jpg",
    title: "Vliia Bromo",
    price: 85,
    rating: 4.6,
    location: "Pasuruan",
  },
  {
    hotelImage: "/imgs/hotel-1.jpg",
    title: "Winny Guests House",
    price: 40,
    rating: 4.8,
    location: "Kuta, Bali",
  },
  {
    hotelImage: "/imgs/villa.jpg",
    title: "Soehat Apartement",
    price: 75,
    rating: 4.7,
    location: "kota malang",
  },
  {
    hotelImage: "/imgs/apartment.jpg",
    title: "California Hotel",
    price: 150,
    rating: 4.5,
    location: "kota malang",
  },
  {
    hotelImage: "/imgs/apartment.jpg",
    title: "California Hotel",
    price: 150,
    rating: 4.5,
    location: "kota malang",
  },
  {
    hotelImage: "/imgs/house.jpg",
    title: "Vliia Bromo",
    price: 85,
    rating: 4.6,
    location: "Pasuruan",
  },
  {
    hotelImage: "/imgs/hotel-1.jpg",
    title: "Winny Guests House",
    price: 40,
    rating: 4.8,
    location: "Kuta, Bali",
  },
  {
    hotelImage: "/imgs/villa.jpg",
    title: "Soehat Apartement",
    price: 75,
    rating: 4.7,
    location: "kota malang",
  },
  {
    hotelImage: "/imgs/apartment.jpg",
    title: "California Hotel",
    price: 150,
    rating: 4.5,
    location: "kota malang",
  },
];
const Home: NextPage = () => {
  return (
    <div className="container">
      <Hero />
      <div className="px-10 xl:px-4">
        <Categories />
        <div className="py-16">
          <h3 className="sectionTitle">Curious? Browse our selection now!</h3>
          <div className="grid grid-cols-5 gap-5 py-10">
            {dummy.map((item, index) => (
              <BrowseCard key={index} item={item} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="text-secondary-500 font-bold border-2 border-secondary-500 px-14 py-2 rounded-full hover:bg-secondary-500 hover:text-white easeHover">
              See All
            </button>
          </div>
        </div>

        <RegisterBox />
      </div>
    </div>
  );
};

export default Home;
