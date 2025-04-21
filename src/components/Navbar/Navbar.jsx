import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '/src/assets/logo.png';
import search_icon from '/src/assets/search_icon.png'
import basket_icon from '/src/assets/basket_icon.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {

    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);
    
    return ( 
        <div className='navbar'>
            <Link to='/'><img src={logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu('home')} className={menu==="home" ? "active":''}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==="menu" ? "active":'' }>menu</a>
                <a href="#app-download" onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app" ? "active":''}>mobile app</a>
            </ul>
            <div className="navbar-right">
                <img src={search_icon} alt="" />
                <div className="navbar-search-icon">
                   <Link to='/cart' > <img src={basket_icon} alt="" /> </Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
     );
}

export default Navbar;