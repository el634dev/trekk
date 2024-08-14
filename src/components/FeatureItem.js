"use client"
import React from 'react';

export default function FeatureItem({ icon, text }) {
  return (
    <>
        <image
            loading="lazy" 
            src={icon} 
            alt={icon.text}
            className="object-contain shrink-0 w-5 aspect-square flex gap-1 self-stretch mt-3 first:mt-0" 
          />
      <div className="flex-auto">{text}</div>
    </>
  );
};
