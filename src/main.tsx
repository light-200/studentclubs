import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./containers/Pages/EventPage";
import "./index.css";
import ClubPage from "./containers/Pages/ClubPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/Event/:slug"} element={<EventPage />} />
        <Route path={"/Club/:slug"} element={<ClubPage />} />
        <Route path={"*"} element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
