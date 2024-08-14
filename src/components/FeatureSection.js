"use client"
import React from "react";

export default function FeatureSection({title, description }) {
    return (
        <>
            <h3 className="mt-9 max-md:mt-10">{title}</h3>
            <p className="mt-4 text-base">{description}</p>
        </>
    );
}