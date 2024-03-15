import './Navigation.css';

function Navigation(){


    return(
        <div className="navi">
           

            {/* for the logo */}

            <div className="logo">
                <img src="" alt="LOGO" />
            </div>

            {/* for some navigations */}
            <div className="navs">
            <nav>
                <ul>
                    <input type="text" className='search-box' id='top' placeholder='Search' />

                    <div className="Post-ad" id='top'>
                        <p>Post Add</p>
                    </div>
                    
                </ul>
            </nav>
            
            {/* to change the theme */}
            </div>

            <div className="theme">
                <p>Theme</p>

            </div>
            

            {/* userinfomation */}
            <div className="user">
                <button className="LogIn-btn">LogIn</button>
                
            </div>
            
            

        </div>
        
    );
}

export default Navigation;