"use client"
import React from 'react';

export default function FeatureItem({ icon, text }) {
  return (
    <div className="flex gap-1 self-stretch mt-3 first:mt-0">
        <img
            loading="lazy" 
            src={icon} 
            alt={feature.text}
            className="object-contain shrink-0 w-5 aspect-square" 
        />
      <div className="flex-auto">{text}</div>
    </div>
  );
};
