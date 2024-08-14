"use client"

import React from "react";
import FeatureSection from "./FeatureSection";
import CallToAction from "./CallToAction";

// Array of strings
const features = [
  {
    title: "Flexible and Scalable",
    description: "You can easily lower your budget and make your budget higher. No more wasting money."
  },
  {
    title: "Easy. Seriously Easy.",
    description: "Once you have an account, Trekk takes care of all the travel planning. Start focusing on your journey."
  }
];

function TravelProgram() {
  return (
    <main className="rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-2xl font-medium text-black max-md:mt-10">
            <h1 className="text-2xl font-bold max-md:mr-2.5">
              Put business travel on <br /> repeat
            </h1>
            <h2 className="self-stretch mt-10">
              Customizable employee travel program
            </h2>
            <p className="mt-4 text-base">
              You set the budget and location. Employees use a app to find what they need from a large selection.
            </p>
            {features.map((feature, index) => (
              <FeatureSection
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
            <CallToAction />
          </div>
        </section>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df205a0f6fbdd53854a99fe836935cd65b754bd25e97b795876eb3f2d5d69bc?placeholderIfAbsent=true&apiKey=79899701a9fc47ae835e99b0e1924ba3"
            alt="Business travel illustration"
            className="object-contain w-full rounded-3xl aspect-[0.9] max-md:mt-10"
          />
        </aside>
      </div>
    </main>
  );
}

export default TravelProgram;