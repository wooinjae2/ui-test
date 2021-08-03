import React, { useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext); //useContext Hook을 이용한 context접근 더 깔끔해 보인다.
  console.log(ctx.token)
  useEffect(()=>{
    console.log('navigation useEffect');
    ctx.login();
    return () =>{
      console.log('nav will unmount');
    }
  },[])

  const clickHandler = () => {
    ctx.login();
    

    
  }

  return (<>
    <button onClick={clickHandler}>
      asd
    </button>
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
