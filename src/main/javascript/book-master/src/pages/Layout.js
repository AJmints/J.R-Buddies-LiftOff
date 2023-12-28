import { Outlet, Link , useNavigate } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


const Layout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/search", { state: {key: "keyword"}});
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

                    <li className="nav-item">
                        <Link to="search" className="nav-link">Search & Add Books</Link>
                    </li>

                    {/* will use quick search to search all fields with keyword and go to searchResults.js page to display results */}
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="text" placeholder="Quick Search" id="search_keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
                        <button className="btn btn-primary" type="Submit" >Search</button>
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
                <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom justify-content-center">
                    <span className="navbar-text">JR-Buddies &copy; </span>
                </div>
            </footer>
        </div>
    )
};

export default Layout;
