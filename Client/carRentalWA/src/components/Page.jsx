import { Outlet } from "react-router-dom";
import Navigation from './Navigationi/Navigation'

function Page(){


    return (
        <>
        
            <Navigation/>

            <Outlet/>
        
        </>
    );
}

export default Page;
