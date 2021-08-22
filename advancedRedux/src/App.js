import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/Notification/Notification";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchCartData } from "./store/cart-actions";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsVisible } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const { notification } = useSelector((state) => state.ui);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }
    

    //처음 로딩시 덮어쓰는 문제
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
