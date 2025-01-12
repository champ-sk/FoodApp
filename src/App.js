import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter; // Export `appRouter` so it can be used in `index.js`
