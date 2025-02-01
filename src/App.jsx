import "./customBootstrap.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Reserve from "./views/Reserve/Reserve.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/reservar',
      element: <Reserve />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/admin',
      element: <PanelAdmin />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
