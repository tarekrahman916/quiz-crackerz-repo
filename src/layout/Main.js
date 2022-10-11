import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const TopicsContext = createContext([]);

const Main = () => {
  const quizTopics = useLoaderData();
  const topics = quizTopics.data;

  return (
    <TopicsContext.Provider value={topics}>
      <Header />
      <Outlet />
      <Footer />
    </TopicsContext.Provider>
  );
};

export default Main;
