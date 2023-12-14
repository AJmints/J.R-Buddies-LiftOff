import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/advanced_search">Advanced Search</Link>
                    </li>
                    <li>
                        <Link to="login_and_register">Login/Register</Link>
                    </li>
                    <li>
                        <Link to="customer_account">Customer Account</Link>
                    </li>
                    <li>
                        <Link to="admin_account">Admin Account</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    )
};

export default Layout;