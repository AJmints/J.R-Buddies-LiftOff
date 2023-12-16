import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <div className="body">
            <header>
                <Header />
            </header>
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="advanced_search" className="nav-link">Advanced Search</Link>
                    </li>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Quick Search"></input>
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                    <li className="nav-item">
                        <Link to="user_sign_in" className="nav-link">Login</Link>
                    </li>
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
            </footer>
        </div>
    )
};

export default Layout;