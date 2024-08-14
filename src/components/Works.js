"use client"
import * as React from "react";

export default function MyComponent() {
  return (
    <div className="bg-white rounded-none">
      <div className="px-20 py-14 w-full bg-green-700 rounded-3xl max-md:px-5">
        <div className="self-center text-4xl font-bold text-center text-white">
          You need travel that works
        </div>
        <div className="mt-12 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be620d9271f9f33b2f69f9e0ccf1bf2c61aca0cc6dcccebcd4511d3c8b2c94e2?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3"
                  className="object-contain ml-10 aspect-[1.03] w-[79px] max-md:ml-2.5"
                />
                <div className="mt-3 text-4xl font-bold text-center">
                  On The Dot
                </div>
                <div className="self-stretch mt-5 text-base">
                  Get the iternary you can rely on - professionally prepared.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af0e8b7d623b6a9afcdc53f923a558a397e4fd160d34846b04b47d2a160a9ec?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3"
                  className="object-contain self-center rounded-none aspect-square w-[69px]"
                />
                <div className="mt-7 text-4xl font-bold text-center">
                  Lots of variety
                </div>
                <div className="mt-7 text-base w-[249px] max-md:mr-2.5">
                  Find food, tourist destinations, once in a lifetime
                  experiences and more for any budget.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-24 text-white max-md:mt-10">
                <div className="text-4xl font-bold text-center max-md:mr-0.5">
                  24/7 Support
                </div>
                <div className="mt-4 text-base">
                  Reach a trained AI chatbot in seconds. If more support is
                  needed, a human will reach out to support you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
