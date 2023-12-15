import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <>
            <nav>
                <Header />
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="advanced_search">Advanced Search</Link>
                    <Link to="login_and_register">Login/Register</Link>
                    <Link to="customer_account">Customer Account</Link>
                    <Link to="admin_account">Admin Account</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;