import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from "bootstrap";

const Layout = () => {
    return (
        <div className="body">
            <header>
                <Header />
            </header>
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="advanced_search" className="nav-link">Advanced Search</Link>
                    </li>

                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Quick Search" id="search_keyword"></input>
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>

                    <li className="nav-item">
                        <Link to="user_sign_in" className="nav-link">Login</Link>
                    </li>

{/* last 2 pages hidden will add code for with user verification and link will be visible only to correct user type */}

                    <li className="nav-item invisible">
                        <Link to="customer_account" className="nav-link">Customer Account</Link>
                    </li>

                    <li className="nav-item invisible">
                        <Link to="admin_account" className="nav-link">Admin Account</Link>
                    </li>

                </ul>
            </nav>

            <main>
              <Outlet />  
            </main>

            <footer>
                <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
                    <span className="navbar-text">JR-Buddies &copy; </span>
                </div>
            </footer>
        </div>
    )
};

export default Layout;