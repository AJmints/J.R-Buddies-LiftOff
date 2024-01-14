import { Outlet, Link , useNavigate } from "react-router-dom";
import Header from "../components/header";
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useEffect, useState } from "react";
import axios from "axios";




const Layout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(true);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [userLoans, setUserLoans] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }, [])

    const selectUser = (e) => {
        const userData = e.split(",");
        setUser(userData[0]);

        axios.get("http://localhost:8080/api/user/loans/"+userData[0])
        .then(res=>setUserLoans(res.data))
        .catch(err=>console.log(err));

        if (userData[1] === "ADMIN") {
            setShowLogin(false);
            setShowAdmin(true);
            setShowUser(false);
        } else if (userData[1] === "USER") {
            setShowLogin(false);
            setShowAdmin(false);
            setShowUser(true);
        } else {
            setShowLogin(true);
            setShowAdmin(false);
            setShowUser(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/library_search", {state: [{keyword},{user}]});
    }

    return (
        <div className="body">
            <header>
                <Header />
            </header>
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </div>

                    <div className="nav-item">
                        <Link to="library_search" className="nav-link" state={[{keyword:null},{user:user}]}>Search Library</Link>
                    </div>

                    {/* will use quick search to search all fields with keyword and go to searchResults.js page to display results */}
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="text" placeholder="Quick Search" id="search_keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
                        <button className="btn btn-primary" type="Submit" >Search</button>
                    </form>

                    <div className="mx-2">
                        <select className="form-control" onClick={(e)=>selectUser(e.target.value)} required>
                                {users.map((user, index) => {
                                                return(
                                <option key={index} value={[user.id,user.role]}>{user.email}</option>)
                                            })}
                        </select>
                    </div>

                    <div id="navDropDown" className="nav-item dropdown">
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
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                {/* links only seen to users not logged in */}
                                <Link to="user_sign_in" className="dropdown-item" style={{display: (showLogin ? "block" : "none")}}>Login</Link>
                                <Link to="user_registration" className="dropdown-item" style={{display: (showLogin ? "block" : "none")}}>Register</Link>
                                {/* links seen by users logged in with role USER */}
                                <Link id="userAccount" to="user_account" className="dropdown-item" style={{display: (showLogin ? "none" : "block")}} state={user}>Account</Link>
                                <Link id="userAccount" to="user_account" className="dropdown-item" style={{display: (showUser ? "block" : "none")}} state={user}>Dashboard</Link>
                                {/* links seen by users logged in with role ADMIN */}
                                <Link id="adminAccount" to="admin_home" className="dropdown-item" style={{display: (showAdmin ? "block" : "none")}}>Admin Features</Link>
                                <Link to="search" className="dropdown-item" style={{display: (showAdmin ? "block" : "none")}}>Add Books</Link>
                                {/* quick view of books on loan for current user */}
                                <div id="laons_quick_view" className="dropdown-item text-bg-secondary" style={{display: (showLogin ? "none" : "block")}}>
                                    <p><span style={{fontWeight: "bold"}}>Books currently checked out:</span></p>
                                    <p className="text-white" style={{display: userLoans.length === 0 ? "" : "none"}}><small>No Books Currently Checked Out</small></p>
                                    {userLoans.map((loan, index) => {
                                        return(
                                        <div key={index}>
                                            <div className="dropdown-divider bg-white" style={{display: (showLogin ? "none" : "block")}}></div>
                                            <p><span style={{fontWeight: "bold"}}>Book:</span> {loan.book.title}</p>
                                            <p><span style={{fontWeight: "bold"}}>Due Date:</span> {loan.loanDateIn.slice(5,10)}-{loan.loanDateIn.slice(0,4)}</p>
                                        </div>)
                                        })}
                                    {/* <div className="mx-0"><p><span style={{fontWeight: "bold"}}>Book:</span> Harry Potter and the sorcerers stone</p></div>
                                    <div className="mx-0"><p><span style={{fontWeight: "bold"}}>Due Date:</span> 01-02-2024</p></div>
                                    <div className="dropdown-divider" style={{display: (showLogin ? "none" : "block")}}></div> */}
                                </div>
                            </div>
                    </div>
                </div>
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
