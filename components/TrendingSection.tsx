"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";

interface CourseCardProps {
  number: string;
  title: string;
  description?: string;
  icons?: React.ReactNode;
  showViewAll?: boolean;
  className?: string;
}

function CourseCard({
  number,
  title,
  description,
  icons,
  showViewAll,
  className,
}: CourseCardProps) {
  return (
    <Card className={`relative group overflow-hidden h-full ${className}`}>
      <div
        className={`p-6 h-full ${
          showViewAll ? "bg-[#c23a3a] text-white" : "bg-[#FFF1F1]"
        }`}
      >
        <div className="flex flex-col h-full">
          {showViewAll ? (
            <div className="flex items-center mt-4 text-sm w-full">
              <div className="ml-auto flex items-center font-semibold text-xl">
                View all Courses <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ) : null}
          {showViewAll ? (
            <div className="flex flex-col h-full justify-between bg-[#c23a3a] text-white p-8">
              <div className="flex justify-center gap-4 my-8">
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=eXYS9lpSOpd5&format=png&color=000000"
                    alt="React"
                    className="w-36 h-36"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000"
                    alt="Vue"
                    className="w-36 h-36"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=SkbzwdwhI2sy&format=png&color=000000"
                    alt="Social Media"
                    className="w-36 h-36"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=18706&format=png&color=000000"
                    alt="Design"
                    className="w-36 h-36"
                  />
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[200px] font-extrabold leading-none">
                  {number}
                </span>
                <span className="text-7xl translate-y-1">+</span>
                <div className="mt-12">
                  <h3 className="text-4xl font-bold mb-1">{title}</h3>
                  {description && (
                    <p className="text-xl font-semibold opacity-90 mt-4">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-end h-full relative">
              <div className="flex flex-col justify-end h-full relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center">
                  <div className="text-[#B84545] w-48 text-4xl font-extrabold transform -rotate-90 whitespace-break-spaces mb-14">
                    {title}
                  </div>
                  {description && (
                    <p className="text-[#B84545] w-48 text-xl font-semibold opacity-90 transform -rotate-90 mb-14">
                      {description}
                    </p>
                  )}
                </div>

                <div className="flex items-end justify-center">
                  <div className="flex items-start relative">
                    <span className="text-[#B84545] text-[200px] font-extrabold leading-none">
                      {number}
                    </span>
                    <span
                      className="text-[#B84545] font-semibold absolute"
                      style={{
                        fontSize: "80px",
                        top: "-40px",
                        right: "-40px",
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function CourseStats() {
  return (
    <div className="max-w-full mx-28 px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">
        Explore our classes and master trending skills!
      </h1>
      <h2 className="text-4xl font-bold mb-8">
        Dive Into{" "}
        <span className="text-[#4CAF84]">What&apos;s Hot Right Now!</span> 🔥
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <CourseCard
          number="23"
          title="All Courses"
          description="courses you're powering through right now."
          showViewAll
          className="w-[650px] h-[600px] rounded-3xl"
          icons={
            <>
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="React"
                className="h-10 w-10"
              />
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Social"
                className="h-10 w-10"
              />
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Vue"
                className="h-10 w-10"
              />
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Design"
                className="h-10 w-10"
              />
            </>
          }
        />
        <CourseCard
          number="05"
          title="Upcoming Courses"
          description="exciting new courses waiting to boost your skills."
          className="md:w-[27.5%] h-[600px] rounded-3xl"
        />
        <CourseCard
          number="10"
          title="Ongoing Courses"
          description="currently happening—don't miss out on the action!"
          className="md:w-[27.5%] h-[600px] rounded-3xl"
        />
      </div>
    </div>
  );
}
