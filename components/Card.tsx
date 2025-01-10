"use client";

import React from "react";

interface CardProps {
  type: "main" | "side";
  title: string;
  subtitle: string;
  description: string;
  linkText?: string;
  icons?: string[];
}

const Card: React.FC<CardProps> = ({ type, title, subtitle, description, linkText, icons }) => {
  return (
    <div
      className={`rounded-lg p-6 ${
        type === "main" ? "bg-red-500 text-white" : "bg-red-100 text-red-800"
      }`}
    >
      {/* Icons for Main Card */}
      {type === "main" && icons && (
        <div className="flex space-x-4 mb-4">
          {icons.map((icon, index) => (
            <span key={index} className="text-3xl">
              {/* Replace with actual icons */}
              <img src={`/${icon}.png`} alt={icon} className="h-8 w-8" />
            </span>
          ))}
        </div>
      )}

      {/* Title & Subtitle */}
      <h3 className="text-5xl font-bold mb-2">{title}</h3>
      <h4 className="text-lg font-semibold mb-4">{subtitle}</h4>
      <p className="text-sm">{description}</p>

      {/* Link for Main Card */}
      {type === "main" && linkText && (
        <a href="#" className="mt-4 inline-block text-white underline">
          {linkText} →
        </a>
      )}
    </div>
  );
};

export default Card;
