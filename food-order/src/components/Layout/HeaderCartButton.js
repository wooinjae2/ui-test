import {useContext, useEffect, useState} from 'react';

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlighted] = useState(false); 

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }`;
  const { items } = cartCtx;

  useEffect(()=>{
      if(cartCtx.items.length === 0){
          return;
      }
      console.log('asdsadas');
    setBtnHighlighted(true);
    const timer = setTimeout(()=>{setBtnHighlighted(false)}, 300);
    return ()=>{
        clearTimeout(timer);
    }
  },[cartCtx.items.length, items])

  return (
    <button className={btnClasses} onClick={props.modalClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
