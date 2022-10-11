import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center flex flex-col min-h-[500px]  justify-center items-center p-5">
      <div className="border-4 p-24 shadow-2xl">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        {error && (
          <div className="text-xl">
            <p className="text-red-500 ">{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
