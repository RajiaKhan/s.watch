import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
  return (
    <>
      <div className="container  mx-auto ">
        <div className="flex  relative">
          <div className=""></div>
          <div className=" absolute top-6">
            <Image src="/S.watch.svg" width={100} height={24} />
          </div>
          <div className="flex absolute  right-1/3 2xl:right-1/3 xl:right-1/3 lg:right-2/4 gap-5 px-12 2xl:px-12 lg:px-4 xl:px-32 top-6">
            <div className="text-gray-600 font-semibold">Home</div>
            <div className="text-gray-600 font-semibold">About Us</div>
            <div className="text-gray-600 font-semibold">Services</div>
            <div className="text-gray-600 font-semibold">Products</div>
          </div>
          <div className="right-0 absolute  ">
            <Image src="/Group 304.svg" width={515} height={530} />
          </div>
          <div className="absolute top-32">
            <h1 className="text-7xl lg:text-5xl 2xl:text-7xl xl:text-7xl w-11/12 font-bold text-gray-700">
              Super Luxury Smart Watch{" "}
            </h1>
          </div>
          <div className="absolute top-80 lg:top-64 xl:top-80 2xl:top-80 ">
            <h1 className="text-xl w-6/12 font-medium text-gray-700">
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit. plac
              erat vivamus tortor, vitae aliquam ullamcorper
            </h1>
          </div>
          <div className="absolute top-96  lg:top-80 xl:top-96 2xl:top-96  mt-16">
            <button className="text-xl font-medium  bg-gray-800  rounded-xl text-white px-9 py-4 hover:bg-gray-900 focus:bg-gray-900">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-96 pt-64 mb-12">
        <div className="flex">
          <div className="w-11/12 ">
            <h1 className="text-4xl text-gray-800 font-semibold mt-20 lg:mt-6 xl:mt-20 xl:mt-20">
              About Us
            </h1>
            <h1 className="text-xl w-11/12 text-gray-600 mt-4">
              Putting a watch on your wrist has a larger impact than a simple
              fashion accessory. The world sees the timepiece that you choose to
              wear so make sure it represents you.
            </h1>
            <div className="flex gap-12 mt-6">
              <div className="">
                <h1 className="text-center text-gray-800 font-bold text-xl">
                  1000+
                </h1>
                <h1 className="text-center text-gray-600 font-semibold">
                  Brands
                </h1>
              </div>
              <div className="">
                <h1 className="text-center text-gray-800 font-bold text-xl">
                  250k
                </h1>
                <h1 className="text-center text-gray-600 font-semibold">
                  customer
                </h1>
              </div>
              <div className="">
                <h1 className="text-center text-gray-800 font-bold text-xl">
                  3.2k+
                </h1>
                <h1 className="text-center text-gray-600 font-semibold">
                  Active Merchant
                </h1>
              </div>
            </div>
          </div>
          <div className="w-11/12 ">
            <div className="flex float-right gap-8">
              <div className="w-11/12">
                <div className="flex justify-end items-end">
                  <Image src="/Rectangle 82.svg" width={296} height={168} />
                </div>
                <div className="flex justify-end items-end mt-8">
                  <Image src="/Rectangle 84.svg" width={296} height={168} />
                </div>
              </div>
              <div className="w-11/12  justify-center items-center ">
                <Image src="/Rectangle 83.svg" width={296} height={368} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-32">
        <h1 className="text-4xl text-gray-800 font-semibold ml-48 pl-8 2xl:ml-48 2xl:pl-8 xl:ml-16 xl:pl-8  lg:ml-0 lg:pl-0">
          Available Products
        </h1>
        <div className="flex mt-12 gap-12 justify-center items-center">
          <div className=" ">
            <div className="relative ">
              <Image src="/Rectangle 78.svg" width={515} height={560} />
              <div className="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                Patek Philippe Watch{" "}
              </div>
            </div>
            <div className="">
              <div className="relative mt-12">
                <Image src="/Rectangle 81.svg" width={515} height={330} />
                <div className="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                  X Hybrid Smartwatch{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="relative">
                <Image src="/Rectangle 79.svg" width={515} height={330} />
                <div className="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                  Omega Watch{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative mt-12">
                <Image src="/Rectangle 80.svg" width={515} height={560} />
                <div className="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                  Timex Analog Women's Watch{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-32">
        <div className="flex">
          <div className="w-11/12 ">
            <h1 className="text-gray-800 font-semibold w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12 text-5xl mt-16">
              Subscribe Us And Get Upto 30% Off{" "}
            </h1>
            <h1 className="text-gray-600 text-xl mt-8 w-9/12 lg:w-11/12 xl:w-11/12 2xl:w-9/12">
              Putting a watch on your wrist has a larger impact than a simple
              fashion accessory{" "}
            </h1>
            <div className="flex gap-5 mt-12">
              <div className="w-6/12">
                <label class="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center "></span>
                  <input
                    className="border placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Enter Your Email"
                    type="text"
                    name="search"
                  />
                </label>
              </div>
              <div className="w-5/12">
                <button className="px-6 py-3 bg-gray-800 text-white hover:bg-gray-900 rounded-lg">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-11/12  justify-end items-end flex">
            <Image src="/Rectangle 89.svg" width={624} height={410} />
          </div>
        </div>
      </div>
      <footer className="container mx-auto bg-gray-800 ">
        <div className="flex gap-12 px-12 py-20">
          <div className="w-11/12">
            <Image src="/S.Watch (1).svg" width={100} height={24} />
            <h1 className="text-white mt-4 w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12">
              The world sees the timepiece that you choose to wear so make sure
              it represents you{" "}
            </h1>
            <div className="flex gap-4 mt-4">
              <div className="cursor-pointer">
                <Image src="/Group 321.svg" width={32} height={32} />
              </div>
              <div className="cursor-pointer">
                <Image src="/Group 322.svg" width={32} height={32} />
              </div>
              <div className="cursor-pointer">
                <Image src="/Group 323.svg" width={32} height={32} />
              </div>
              <div className="cursor-pointer">
                <Image src="/Group 324.svg" width={32} height={32} />
              </div>
            </div>
          </div>
          <div className="w-10/12">
            <h1 className="font-bold text-xl text-white">Navigation</h1>
            <h1 className="mt-4 text-white cursor-pointer ">Home</h1>
            <h1 className="mt-4 text-white cursor-pointer ">About Us</h1>
            <h1 className="mt-4 text-white cursor-pointer ">Services</h1>
          </div>
          <div className="w-10/12">
            <h1 className="font-bold text-xl text-white">Information</h1>
            <h1 className="mt-4 text-white cursor-pointer ">+123456789</h1>
            <h1 className="mt-4 text-white cursor-pointer ">Seako@gmail.com</h1>
            <h1 className="mt-4 text-white cursor-pointer ">
              890,Green Lane Pakistan
            </h1>
          </div>
          <div className="w-10/12">
            <h1 className="font-bold text-xl text-white">Opening Hours</h1>
            <h1 className="mt-4 text-white cursor-pointer ">
              Mon - friday: 9:00 - 5:00
            </h1>
            <h1 className="mt-4 text-white cursor-pointer ">
              Friday 9:00 - 4:00
            </h1>
            <h1 className="mt-4 text-white cursor-pointer ">Sat - Sun Off</h1>
          </div>
        </div>
        <h1 className="text-white pb-12 text-xl text-center">
          Copyright 2022 All rights reserved | Watch is made with by Seako five{" "}
        </h1>
      </footer>
    </>
  );
}
