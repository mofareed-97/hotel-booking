import { format } from "date-fns";
import Image from "next/image";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  SubmitHandler,
  useForm,
  Controller,
  useController,
} from "react-hook-form";
import { DateProps, FormValues } from "../../types";

const Hero = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const { field } = useController({ control, name: "bookingDate" });
  const [date, setDate] = useState<DateProps[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dateActive, setDateActive] = useState(false);

  const calendarHandler = (dateParams: any) => {
    setDate([dateParams.selection]);
    field.onChange(dateParams.selection);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[600px] my-10  relative">
      <div className="bg-black/50 absolute w-full h-full z-10"></div>
      <Image
        src="/imgs/hero.jpg"
        layout="fill"
        objectFit="cover"
        alt="wooden house"
        priority
      />

      <div className="w-full  max-w-5xl mx-auto h-full z-20 text-white relative flex flex-col gap-8 text-center items-center justify-center">
        <h2 className="text-3xl lg:text-5xl">
          Huni helps you find a home away from home
        </h2>
        <p className="max-w-xl text-sm lg:text-[16px] leading-8 text-gray-300 ">
          We take the heesle out of finding a place to stay. Browse through our
          selection of over 10 milion reviews and choose your perfect
          accommodation from over 150,000+ places worldwie - all at the click of
          a button.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid lg:grid-cols-4 text-xs md:text-[16px] justify-center bg-primary-300  lg:rounded-full  w-full text-gray-500">
            <div className="flex items-center py-3 h-full border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 ml-5 ">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex flex-col pl-3 h-full items-start ">
                <span className="text-xs text-gray-500">Location</span>
                <input
                  {...register("destination")}
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent border-0 outline-none md:py-2 placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className=" h-full relative border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 ml-5">
              <button
                type="button"
                onClick={() => setDateActive(!dateActive)}
                className="flex items-center py-3"
              >
                <svg
                  className="w-6 h-6 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="relative w-full ">
                  <div className="flex flex-col pl-3 h-full items-start">
                    <span className="text-xs text-gray-500">Date</span>
                    <div className="flex text-sm w-full md:py-2 items-center gap-2 overflow-hidden cursor-pointer">
                      <span className="text-xs">
                        {format(new Date(date[0]?.startDate), "do LLL, yyyy") ||
                          ""}
                      </span>
                      <span className="font-medium">To</span>
                      <span className="text-xs">
                        {format(new Date(date[0]?.endDate), "do LLL, yyyy") ||
                          ""}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
              <div className="absolute -left-[60px] top-full">
                {dateActive && (
                  <Controller
                    control={control}
                    name="bookingDate"
                    render={({ field }) => (
                      <DateRange
                        editableDateInputs={true}
                        onChange={calendarHandler}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                      />
                    )}
                  />
                )}
              </div>
            </div>

            <div className="flex py-3 items-center h-full  lg:border-r-2 border-gray-300 ml-5 ">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>

              <div className="flex flex-col pl-3 h-full items-start ">
                <span className="text-xs text-gray-500">Guests</span>
                <input
                  {...register("guests")}
                  type="text"
                  placeholder="Number of Guests?"
                  className="bg-transparent border-0 outline-none md:py-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn my-10">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
