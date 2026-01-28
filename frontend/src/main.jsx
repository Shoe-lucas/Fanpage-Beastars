import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/variable.scss";

import Layout from "./layout/layout";
import Home from "./components/pages/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>
);
