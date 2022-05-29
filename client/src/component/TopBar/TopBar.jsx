import React from 'react';
import './TopBar.css';
import { googleLogout } from '@react-oauth/google';
import '../../ui/Button/Button.css'
import Cookies from 'js-cookie';
const TopBar = ({setLogged}) => {
    const logout =() =>
    {
        googleLogout();
        setLogged(false);
        Cookies.remove("user");
    }
    return (
        <nav className='nav'>
            <h1>TopBar</h1>
            <button style={{width:'10%'}} type="button" className='btn-google item' onClick={() => logout()}>Log out</button>
            {/* <Button className='btn-google' onClick={()=>logout()}>Logout</Button> */}
        </nav>
    );
}

export default TopBar;