import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WrongPath from "./pages/WrongPath";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoriteCardsProvider } from "./context/FavoriteCardsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteCardsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </FavoriteCardsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
