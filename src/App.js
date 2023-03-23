import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist/index";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import AppContext from "./context";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  React.useEffect(() => {
    fetch("https://6419f2ffc152063412cff6e4.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
    fetch("https://6419f2ffc152063412cff6e4.mockapi.io/favorited")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setFavorites(json);
      });
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://6419f2ffc152063412cff6e4.mockapi.io/favorited/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6419f2ffc152063412cff6e4.mockapi.io/favorited",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        onAddToFavorite,
      }}
    >
      <div className="App">
        <body>
          <Header />
          <Routes>
            <Route path="/" element={<Home  items={items} onAddToFavorite={onAddToFavorite}/>} exact />
            <Route path="/wishlist" element={<Wishlist />} exact />
            <Route path="/Cart" element={<Cart />} exact />
          </Routes>
          <Footer />
        </body>
      </div>
    </AppContext.Provider>
  );
}

export default App;
