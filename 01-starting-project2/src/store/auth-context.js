import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: '',
  onLogout: () => {}, //이렇게 명시해줘야 ide에서 자동완성을 사용가능하다.
  onLogin: (email, password) => {},
  login: () => {},
  
}); //create Context Object

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log('여기', email, password);
    localStorage.setItem("isLoggedIn", "1");
    
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const login = () =>{ 
    console.log(token);
    
    setTimeout(()=>{
      setToken(Math.random().toString());
    }, 500);
  };

  return <AuthContext.Provider
    value={{
        isLoggedIn:isLoggedIn,
        token: token,
        login: login,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }}
  >{props.children}</AuthContext.Provider>;
};

export default AuthContext;
