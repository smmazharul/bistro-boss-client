import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location=useLocation()
    const login=location.pathname.includes('login')|| location.pathname.includes('signup')
    return (
        <div>
         { login  ||   <Navbar></Navbar>}
            <Outlet></Outlet>
            { login || <Footer></Footer>}
        </div>
    );
};

export default Main;