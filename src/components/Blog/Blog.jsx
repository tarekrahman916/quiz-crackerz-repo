import React from "react";

const Blog = () => {
  return (
    <div className="">
      <div className="md:mx-28 mx-5 border shadow-md p-5">
        <h1 className="text-2xl font-bold mb-5">
          (1) What is the purpose of react router ?
        </h1>
        <p className="text-lg font-semibold ml-7">
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. <br />
        </p>
      </div>
      <div className="md:mx-28 mx-5 border shadow-md p-5 my-5">
        <h1 className="text-2xl font-bold mb-5">
          (2) How does context api work ?
        </h1>
        <p className="text-lg font-semibold ml-7">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. <br />
        </p>
      </div>
      <div className="md:mx-28 mx-5 border shadow-md p-5 my-5">
        <h1 className="text-2xl font-bold mb-5">
          (3) What is useRef hook in React? ?
        </h1>
        <p className="text-lg font-semibold ml-7">
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component. <br />
          Ref means just reference, so it can be a reference to anything (DOM
          node, Javascript value, etc). The useRef hook returns a mutable object
          which doesn’t re-render the component when it’s changed. Think it like
          useState, but unlike useState, doesn’t trigger re-render of the
          component. The object that useRef returns have a current property that
          can hold any modifiable value.
        </p>
      </div>
    </div>
  );
};

export default Blog;
