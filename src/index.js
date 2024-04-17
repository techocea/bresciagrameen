import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import Loan from "./pages/loan";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

import Services from "./pages/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "loans",
        element: <Loan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/loans" element={<Loan />} >
//         <Route path="user-info" element={<userInfo/>}/>
//       </Route>
//     </Routes>
//     <Footer />
//   </BrowserRouter>
// );
