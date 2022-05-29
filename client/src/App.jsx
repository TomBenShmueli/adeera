import { useState, useEffect } from 'react';
import React from "react";
import "./App.css";
import TopBar from './component/TopBar/TopBar';
import FilterBar from './component/FilterBar/FilterBar';
import Stage from './component/Stage/Stage';
import Login from './component/Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'js-cookie';
function App() {
  const [data, setData] = useState(null);
  const [logged,setLogged] = useState(false);
  const readCookie = () =>{
    const user = Cookies.get("user");
    if(user)
    {
      setLogged(true);
    }
  }
  useEffect(()=> {
    readCookie();
  },[]);
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  if(!logged)
  {
    return (
      <div>
        <GoogleOAuthProvider clientId='728582244780-u30vk95ses03dn924pj8ap2alocbht66.apps.googleusercontent.com'>
          <Login setLogged={setLogged}/>
  

        </GoogleOAuthProvider>
  
      </div>
    );
  }
  else{
    return(
      <div>
      <TopBar setLogged={setLogged} />
      <FilterBar />
      <Stage />
      </div>

    )
  }
  
}

export default App;