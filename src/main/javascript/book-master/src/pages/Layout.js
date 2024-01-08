import { Outlet, Link , useNavigate } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";




const Layout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState("");
    const [showLogin, setShowLogin] = useState(true);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showCustomer, setShowCustomer] = useState(false);

    const handleLoginState = (e) => {
        setLoginState(e.target);
        console.log(loginState.value);
        if (loginState.value === "logout") {
            setShowLogin(true);
            setShowAdmin(false);
            setShowCustomer(false);
        } else if (loginState.value === "customer") {
            setShowLogin(false);
            setShowAdmin(false);
            setShowCustomer(true);
        } else if (loginState.value === "admin") {
            setShowLogin(false);
            setShowAdmin(true);
            setShowCustomer(false);
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

                    <li className="nav-item">
                        <Link id="loginLink" to="user_sign_in" className="nav-link" style={{display: (showLogin ? "block" : "none")}}>Login/Register</Link>
                    </li>

{/* last 2 pages hidden will add code for with user verification and link will be visible only to correct user type */}

                    <li className="nav-item">
                        <Link id="customerAccount" to="customer_account" className="nav-link" style={{display: (showCustomer ? "block" : "none")}}>Customer Account</Link>
                    </li>

                    <li className="nav-item">
                        <Link id="adminAccount" to="admin_home" className="nav-link" style={{display: (showAdmin ? "block" : "none")}}>Admin Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="search" className="nav-link" style={{display: (showAdmin ? "block" : "none")}}>Search & Add Books</Link>
                    </li>
                    
                    <li className="nav-item ms-3">
                        <select className='form-control' onChange={handleLoginState} >
                            <option value={"logout"} >Logout</option>
                            <option value={"customer"}>Customer</option>
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
