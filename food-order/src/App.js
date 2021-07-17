import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClickHandler = () => {
    setModalOpen((prevState) => !prevState);
  }

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  return (
    <Fragment>
      <Cart modalOpen={modalOpen} modalCloseHandler={modalCloseHandler}/>
      <Header modalClickHandler={modalClickHandler}/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
