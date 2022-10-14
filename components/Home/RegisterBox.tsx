import Image from "next/image";
import React from "react";

const RegisterBox = () => {
  return (
    <div className="h-[600px] my-10  relative rounded-xl overflow-hidden">
      <div className="bg-black/50 absolute w-full h-full z-10"></div>
      <Image
        src="/imgs/registerBox.jpg"
        layout="fill"
        objectFit="cover"
        alt="wooden house"
        priority
      />

      <div className="w-full  max-w-5xl mx-auto h-full z-20 text-white relative flex flex-col gap-8 text-center items-center justify-center">
        <h2 className="text-3xl lg:text-5xl">Get 70% discount for new users</h2>
        <p className="max-w-2xl text-sm lg:text-[16px] leading-8 text-gray-300 ">
          With Huni&apos;s diverse database of listings, we can offer our
          customers something in every category - from hotels so houses to
          apartments and everything in between. No matter where your next
          destination is, we can help make your stay as comfortable as possible.
        </p>

        <button className="btn">Register</button>
      </div>
    </div>
  );
};

export default RegisterBox;
