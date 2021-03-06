import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const saveUserInfo =(userInfo) =>{
    console.log('userInfo', {id:Math.random(), ...userInfo});
    setUserList((prevUserList) => [{id:Math.random().toString(), ...userInfo}, ...prevUserList])
  }
  return (
    <div className="App">
      <UserForm saveUserInfo={saveUserInfo}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
