import {NavLink} from 'react-router-dom'

import './Navigation.css';

function Navigation(){


    return(

    <>
         <div className="navi">
           

           {/* for the logo */}

           <div className="logo">
              <NavLink to='/'><img className='Logo-img' src="./src/asset/Logo.jpg" alt="LOGO" /></NavLink>
           </div>

           {/* for some navigations */}
           <div className="navs">
           <nav>
               <ul>
                   <input type="text" className='search-box' id='top' placeholder='Search' />

                   <div className="Post-ad" id='top'>
                       
                       <p >Post Ad</p>
                   </div>
                   
               </ul>
           </nav>
           
           {/* to change the theme */}
           </div>

           <div className="theme">
               

           </div>
           

           {/* userinfomation */}
           <div className="user">
               <NavLink to="/login"><button className="LogIn-btn">LogIn</button></NavLink>  
               
               
           </div>
           
           

        </div>

       
        
    </>

        
    );
}

export default Navigation;