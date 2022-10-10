import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
