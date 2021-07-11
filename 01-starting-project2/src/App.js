import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(()=>{
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  },[]);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };



  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };
//1. auth context만듬
//2. authcontext를 import해서 이 컨텍스트 데이터를 사용할 모든 데이터를 감싸줌
//3. 2가지로 context 데이터 접근 가능 1. provider의 데이터를 리슨할수 있음 2. context hook consumer 제거
//
  return (
      <AuthContext.Provider 
        value={{
          isLoggedIn: isLoggedIn// provider에 default value를 넣어준다.
        }}
      >
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>

  );
}

export default App;