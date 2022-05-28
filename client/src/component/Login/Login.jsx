import React from 'react'
import '../../ui/Button/Button.css'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';
import "./Login.css"
const Login = ({setLogged}) => {

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      //console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      Cookies.set("user","loginTrue");
      setLogged(true);
      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });
  return (
    <div className='login'>
        <div className='login-bar'>
            <img src="/loginLogo.png" alt="" className="login-logo" />
        </div>
        <div className='sign-in-container'>
            <div className='sign-in-form'>
            <h1>Log In</h1>
            <button type="button" className='btn-google item' onClick={() => googleLogin()}>Log In With Google</button>
              {/* <Button className='btn-google item' display='Log In With Google' onClick={() => googleLogin()} /> */}
            </div>
        </div>
    </div>
  )
}

export default Login