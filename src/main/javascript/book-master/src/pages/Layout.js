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
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // try {
        //     const response = await axios.post("localhost:8080/api/user/login", {
        //         email,
        //         password,
        //     });

        //     if (response.status === 200) {
        //         console.log("Login successful");
        //     } else {
        //         console.error("Authentication failed");
        //     }
        // } catch (error) {
        //     console.error("Error during login:", error);
        // }

        axios.post("localhost:8080/api/user/login", {email, password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    };

    const selectUser = (e) => {
        const userData = e.split(",");
        setUser(userData[0]);

        axios.get("http://localhost:8080/api/user/loans/"+userData[0])
        .then(res=>setUserLoans(res.data))
        .catch(err=>console.log(err));

        if (userData[1] === "ADMIN") {
            setShowLogin(false);
            setShowAdmin(true);
            setShowUser(true);
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
                                <option key={index} value={[user.id,user.role[0].role]}>{user.email}</option>)
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
                                {/* <Link to="user_sign_in" className="dropdown-item" style={{display: (showLogin ? "" : "none")}}>Login</Link>
                                <Link to="user_registration" className="dropdown-item" style={{display: (showLogin ? "" : "none")}}>Register</Link> */}
                                <div className="row mx-1" style={{display: (showLogin ? "" : "none")}}>
                                    <h4>Log In</h4>
                                    <form onSubmit={handleLogin}>
                                    <div className='row mx-0'>
                                        <label htmlFor='email' className='form-label'><small>User Name:</small></label>
                                        <input type='text' className='form-control' id='email' required value={email} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                <div className='row mx-0 mb-2'>
                                    <label htmlFor="password" className='form-label'>Password:</label>
                                    <input type='password' className='form-control' id='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div>
                                    
                                </div>             
                                </form>
                            <div className="row pe-5 mx-4">
                                <button type='submit' className="btn btn-success">Submit</button>
                                <h5>Not registered?</h5>
                                <Link to="/user_registration" className="justify-content-center">Sign Up</Link>
                            </div>
                            </div>
                                {/* links seen by users logged in with role USER */}
                                <Link id="userDashboard" to="user_dashboard" className="dropdown-item" style={{display: (showUser ? "" : "none")}} state={user}>User Dashboard</Link>
                                {/* links seen by users logged in with role ADMIN */}
                                <Link id="adminAccount" to="admin_home" className="dropdown-item" style={{display: (showAdmin ? "" : "none")}}>Admin Features</Link>
                                <Link to="search" className="dropdown-item" style={{display: (showAdmin ? "" : "none")}}>Add Books</Link>
                                {/* quick view of books on loan for current user */}
                                <div id="laons_quick_view" className="dropdown-item text-bg-secondary" style={{display: (showUser ? "" : "none")}}>
                                    <p><span style={{fontWeight: "bold"}}>Books currently checked out:</span></p>
                                    <p className="text-white" style={{display: userLoans.length === 0 ? "" : "none"}}><small>No Books Currently Checked Out</small></p>
                                    {userLoans.map((loan, index) => {
                                        return(
                                        <div key={index}>
                                            <div className="dropdown-divider bg-white" style={{display: (showLogin ? "none" : "")}}></div>
                                            <p><span style={{fontWeight: "bold"}}>Book:</span> {loan.book.title}</p>
                                            <p><span style={{fontWeight: "bold"}}>Due Date:</span> {loan.loanDateIn.slice(5,10)}-{loan.loanDateIn.slice(0,4)}</p>
                                        </div>)
                                        })}
                                    {/* <div className="mx-0"><p><span style={{fontWeight: "bold"}}>Book:</span> Harry Potter and the sorcerers stone</p></div>
                                    <div className="mx-0"><p><span style={{fontWeight: "bold"}}>Due Date:</span> 01-02-2024</p></div>
                                    <div className="dropdown-divider" style={{display: (showLogin ? "none" : "")}}></div> */}
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
