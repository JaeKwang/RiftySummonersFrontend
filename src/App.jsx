import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import CardList from "./pages/CardList";
import CardDetail from "./pages/CardDetail";
import FavoriteList from "./pages/FavoriteList";
import CheckOut from "./pages/CheckOut";

import Game from "./pages/Game";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="login" element={<Login />} />
          <Route path="cards" element={<CardList />} />
          <Route path="cards/:id" element={<CardDetail />} />
          <Route path="favorite" element={<FavoriteList />} />
          <Route path="checkout" element={<CheckOut />} />

          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
