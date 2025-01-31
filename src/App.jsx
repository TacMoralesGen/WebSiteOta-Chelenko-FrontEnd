import "./customBootstrap.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Checkout from "./views/Checkout/Checkout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactInformationForm from "./components/Contact-information-form/ContactInformationForm.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/contactForm',
      element: <ContactInformationForm />
    }
  ])
  return (
    <RouterProvider router={router} />
      // <BrowserRouter>
      // <Navbar isUponBanner={true}/>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/reservar" element={<Checkout />} />
      //     <Route path="/checkout" element={<h1>Checkout el correcto</h1>} />
      //     <Route
      //       path="/confirmacion-reserva"
      //       element={<h1>Reserva Exitosa</h1>}
      //     />
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
