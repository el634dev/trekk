import React from "react";
import FeatureItem from "@/components/FeatureItem";
import Travel from "@/components/Travel";
import Works from "@/components/Works";

// Array of Icons and text
const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c6cfe3e9c5b1244e0b4393438b444ed525588700f3c1a41d30fd4664e527a5b?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3",
    text: "Over 100,000 Restaurants, Tourist Experiences, Lodgings & More"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a80d8119c9da98b5c3c4d7f7675a44cc5b20ec4851f8f5ea9ef0c62305ee17a?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3",
    text: "Any budget, group size or dietary restrictions"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9975a0a5c59cb65e6d35c621f8a4d94b707d28508003a5e1733d71fbbb105e13?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3",
    text: "Anywhere in the world"
  }
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center px-16 py-32 w-full min-h-[501px] max-md:px-5 max-md:py-24">
        <div className="flex px-9 pt-9 pb-16 mb-0 w-lg bg-green-700 rounded-[30px] max-md:px-5 max-md:mb-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <h1 className="text-4xl text-white">
                  Need Help Planning? <br /> Go with the experts.
                </h1>
                {/* Budget Form */}
                <div className="flex justify-start items-start">
                  <form className="gap-5 pl-4 mt-5 max-w-full text-black bg-white rounded-sm w-[306px]">
                    <label htmlFor="budget" className="sr-only">Enter your budget</label>
                    <input
                      type="text"
                      id="budget"
                      placeholder="Enter your budget"
                      className="my-auto text-sm bg-transparent"
                      aria-label="Enter your budget"
                    />
                    {/* Seach Button */}
      
                      <button type="submit" className="ml-9 z-10 px-6 py-2.5 text-sm whitespace-nowrap bg-amber-400 rounded-sm max-md:px-5 max-md:-mr-0.5">
                        Search
                      </button>
                    {/* End of Search Button */}
                  </form>
                </div>
                {/* End of Budget Form */}
              </div>
            </div>
            {/* Array of icons and text next to it */}
            <div className="flex flex-col ml-6 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full text-base text-white max-md:mt-10 max-md:max-w-full">
                {features.map((feature, index) => (
                  <FeatureItem key={index} icon={feature.icon} text={feature.text} />
                ))}
                <p className="mt-3.5">See Your Itinerary Made Simple</p>
              </div>
            </div>
            {/* End of array of icons */}
          </div>
        </div>
      </div>
      {/* Beginning of Business travel card */}
      <Travel />
      {/* End of Business Travel Card */}
      <Works />
    </main>
  );
}
