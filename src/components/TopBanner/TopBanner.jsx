import React from "react";
import "./TopBanner.css";
import heroImg from "../../asset/hero.jpg";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const TopBanner = () => {
  return (
    <div className="top-banner bg-black  mb-10 relative text-center">
      <img className=" w-full opacity-50" src={heroImg} alt="" />
      <div className="absolute bottom-1/3 right-1/2 translate-x-1/2 text-white mt-5 ">
        <h1 className="md:text-5xl text-2xl text-center ">
          Develop Your Skill By Taking Quizzes
        </h1>

        <div className="flex justify-center">
          <button className="  border border-white mt-10 p-3  bg-indigo-600 rounded-lg hover:bg-indigo-900">
            <Link to="/blogs" className="flex gap-2">
              See Our All Blogs
              <ArrowLongRightIcon className="h-6 w-6 text-white" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
