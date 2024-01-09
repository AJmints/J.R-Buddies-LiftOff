import { Outlet, Link , useNavigate } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useState } from "react";




const Layout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState("");
    const [showLogin, setShowLogin] = useState(true);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const handleLoginState = (e) => {
        setLoginState(e.target);
        if (loginState.value === "logout") {
            setShowLogin(true);
            setShowAdmin(false);
            setShowUser(false);
        } else if (loginState.value === "user") {
            setShowLogin(false);
            setShowAdmin(false);
            setShowUser(true);
        } else if (loginState.value === "admin") {
            setShowLogin(false);
            setShowAdmin(true);
            setShowUser(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/library_search", {state: {keyword}});
    }

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
                        <Link to="library_search" className="nav-link">Search Library</Link>
                    </li>

                    {/* will use quick search to search all fields with keyword and go to searchResults.js page to display results */}
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="text" placeholder="Quick Search" id="search_keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
                        <button className="btn btn-primary" type="Submit" >Search</button>
                    </form>

                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Account
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="user_sign_in" className="dropdown-item">Login</Link>
                        <Link to="user_registration" className="dropdown-item">Register</Link>
                    </div>
                </li>

{/* last 2 pages hidden will add code for with user verification and link will be visible only to correct user type */}

                    <li className="nav-item">
                        <Link id="userAccount" to="user_account" className="nav-link" style={{display: (showUser ? "block" : "none")}}>User Account</Link>
                    </li>

                    <li className="nav-item">
                        <Link id="adminAccount" to="admin_home" className="nav-link" style={{display: (showAdmin ? "block" : "none")}}>Admin Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="search" className="nav-link" style={{display: (showAdmin ? "block" : "none")}}>Search & Add Books</Link>
                    </li>
                    
                    <li className="nav-item ms-3">
                        <select className='form-control' onClick={handleLoginState} >
                            <option value={"logout"} >Logout</option>
                            <option value={"user"}>User</option>
                            <option value={"admin"}>Admin</option>
                         </select>
                    </li>
                </ul>
            </nav>

            <main>
              <Outlet />  
            </main>

            <footer>
                <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom justify-content-center">
                    <span className="navbar-text">JR-Buddies &copy; </span>
                </div>
            </footer>
        </div>
    )
};

export default Layout;
