import '../compCss/Navigation.css';

function Navigation(){
    

    return(
        <div className="navi">


            <div className="logo">
                <img src="" alt="LOGO" />
            </div>


            <div className="navs">
            <nav>
                <ul>
                    <li>home</li>
                    <li>contact</li>
                    <li>niga</li>
                    <li>sthi</li>
                </ul>
            </nav>
            </div>

            <div className="user">
                <button className="LogIn-btn">LogIn</button>
                <button className="SignUp-btn">SignUp</button>
            </div>


        </div>
        
    );
}

export default Navigation;