import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import Loan from "./pages/loan";
import News from "./pages/news";
import Migrationloans from "./pages/migrationloans";
import Studentloans from "./pages/studentloans";
import Showmoney from "./pages/showmoney";
import Westernunion from "./pages/westernunion";
import Goldpawning from "./pages/goldpawning";

import Layout from "./utils/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "services/migration-loan",
        element: <Migrationloans />,
      },
      {
        path: "services/student-loan",
        element: <Studentloans />,
      },
      {
        path: "services/show-money",
        element: <Showmoney />,
      },
      {
        path: "services/western-union",
        element: <Westernunion />,
      },
      {
        path: "services/gold-pawning",
        element: <Goldpawning />,
      },
      {
        path: "news",
        element: <News />,
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
//       <Route path="/news" element={<News />} />
//       <Route path="/loans" element={<Loan />} />
//     </Routes>
//     <Footer />
//   </BrowserRouter>
// );
