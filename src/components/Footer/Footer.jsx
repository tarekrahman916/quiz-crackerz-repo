import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center p-20 bg-slate-800 mt-5 text-white">
      <h1 className="text-4xl">
        <Link to="/">Quizzes World</Link>
      </h1>
      <hr className="border my-2" />
      <small className="text-xl">Powered By Quizzes World ! 2022</small>
    </div>
  );
};

export default Footer;
