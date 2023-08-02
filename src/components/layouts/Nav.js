import React from 'react';
import redbus_logo from '../../Images/redbus_logo.png'
import nav_down_arrow from '../../Images/down_Arrow-removebg-preview.png'
import user_nav_img from '../../Images/user.png'
import { Link } from 'react-router-dom';
function Nav() {
    return (
      <>
          <nav className="redbus_nav">
            <div className="nav_container">
                <div className="Nav_container_left">
                    <ul className="nav_list">
                        <li><img src={redbus_logo} alt="Redbus" /></li>
                        <li>BUS TICKETS</li>
                        
                    </ul>
                </div>
                <div className="Nav_container_right">
                    <ul className="nav_list nav_list_right">
                       
                        <li className='contain_arrow'> <img className='nav_down_arrow' src={nav_down_arrow} alt="down arrow"  /></li>
                        <li className='contain_arrow'><img className='user_nav_img' src={user_nav_img} alt="user_pic" /> </li> {/*<img className='nav_down_arrow' src={nav_down_arrow} alt="down arrow"  /> */}
                        
                        <li><Link to="/Login">LOGIN/SIGNUP</Link> </li>
                            
       
                    </ul>
                </div>
            </div>
          </nav>
      </>
    );
  }
  
  export default Nav;
  