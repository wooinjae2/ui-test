import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClickHandler = () => {
    setModalOpen((prevState) => !prevState);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    <CartProvider>
      <Cart modalOpen={modalOpen} modalCloseHandler={modalCloseHandler} />
      <Header modalClickHandler={modalClickHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
