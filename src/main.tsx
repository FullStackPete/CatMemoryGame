import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WrongPath from "./pages/WrongPath";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoriteCardsProvider } from "./context/FavoriteCardsContext";
import Layout from "./Layout";
import { WinProvider } from "./context/WinContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteCardsProvider>
        <WinProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/*" element={<WrongPath />} />
            </Route>
          </Routes>
        </WinProvider>
      </FavoriteCardsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
