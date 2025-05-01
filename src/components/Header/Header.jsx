import React, { useContext } from 'react';
import './Header.css'
function Header() {

    return ( 
        <div className='header'>
            <div className="header-content">
               <h2>Order your favourite food here</h2> 
               <p>Choose from a diverse menu featuring a delectabe array of dishes crafted 
                with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings,
                and elevate you experience, one delecious meal at a time
               </p>
               <a href="#explore-menu">
                <button>View Menu</button>
            </a>

            </div>
        </div>
     );
}

export default Header;