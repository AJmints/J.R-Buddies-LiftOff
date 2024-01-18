import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


import Admin1Home from './pages/Admin1Home';
import Admin2Books from './pages/Admin2Books';
import Admin2Users from './pages/Admin2Users';
import Admin2loans from './pages/Admin2Loans';
import Admin3UserInfo from './pages/Admin3UserInfo';
import Admin3BookInfo from './pages/Admin3BookInfo';
import Admin3AddRoles from './pages/Admin3AddRoles';
import AdminEvents from './pages/AdminEvents';
import UserAccount from "./pages/UserAccount";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import UserRegistration from "./pages/UserRegistration";
import UserSignIn from "./pages/UserSignin";
import Search from './pages/Search'
import DisplayBook from './pages/DisplayBook';
import Admin5BookUpdates from './pages/Admin5BookUpdates';
import Admin5UserUpdates from './pages/Admin5UserUpdates';
import EventsForm from './pages/EventsForm'
import AddedBookToDBSuccess from "./pages/AddedBookToDBSuccess";
import LibrarySearch from "./pages/LibrarySearch";
import RemoveSearch from "./pages/RemoveSearch";
import RemoveBookSuccess from "./pages/RemoveBookSuccess";
import CreateRecommendation from "./pages/CreateRecommendation";
import RecommendationSuccess from "./pages/RecommendationSuccess";
import RemoveRecommendations from "./pages/RemoveRecommendations";
import UserDashboard from "./pages/UserDashboard"
import Admin2Roles from './pages/Admin2Roles';


export default function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loans, setLoans] = useState([]);
  const [roles, setRoles] = useState([]);

  
 ///////////////////////////////
// FETCHING USERS TABLES
////////////////////////////////

  const URL = "http://localhost:8080/api/user/all"
  const URL2 = "http://localhost:8080/api/user/"

    // Function to fetch data using Axios
  const getUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateUser = (user, id) => {
    try{
           axios.put(URL2 + id, user)
          } catch (error) {
                    console.error("Error fetching data:", error);
                  };  
        getUsers()
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(URL2 + id);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    getUsers()
  };

    // Call fetchData on component mount
   
    useEffect(() => {getUsers()}, []);

 ///////////////////////////////
// FETCHING BOOKS TABLES
////////////////////////////////



const URL_BOOKS = "http://localhost:8080/book/"

const getBooks = async () => {
  try {
    const response = await axios.get(URL_BOOKS + "all");
    setBooks(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  };
};

const deleteBook = async (id) => {
 try{
  axios.delete(URL_BOOKS + id)
} catch (error) {
  console.error("Error fetching data:", error);
};
 getBooks()
  }


const updateBook = (book, id) => {
  try{
         axios.put(URL_BOOKS + id, book)
        } catch (error) {
                  console.error("Error fetching data:", error);
                };  
      getBooks()
};

useEffect(() => {getBooks()}, []);


 ///////////////////////////////
// FETCHING LOANS TABLE
////////////////////////////////

const URL_LOANS = "http://localhost:8080/loan/"

const getLoans = async () => {
  try {
    const response = await axios.get(URL_LOANS + "all_details");
    setLoans(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  };
};

const deleteLoan = async (id) => {
 try{
  axios.delete(URL_LOANS + id)
} catch (error) {
  console.error("Error fetching data:", error);
};
 getLoans()
  }


const updateLoan = (loan, id) => {
  try{
         axios.put(URL_LOANS + id, loan)
        } catch (error) {
                  console.error("Error fetching data:", error);
                };
      getLoans()
};

useEffect(() => {getLoans()}, []);

 ///////////////////////////////
// FETCHING ROLES
////////////////////////////////

const URL_ROLES = "http://localhost:8080/role"

const getRoles = async () => {
  try {
    const response = await axios.get(URL_ROLES);
    setRoles(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  };
};

const saveRole = async (role) => {
  try {
    const response = await axios.post(URL_ROLES, role);
    setRoles(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  };
  getRoles()
};

const deleteRole = async (id) => {
 try{
  axios.delete(URL_ROLES  + "/" + id)
} catch (error) {
  console.error("Error fetching data:", error);
};
 getRoles()
  }

  useEffect(() => {getRoles()}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          {/* Routes in alphabetical order to be easier to find */}
          <Route path="admin_home" element={<Admin1Home />}/>

          <Route path="admin_home/events" element={<AdminEvents />} />
          <Route path="admin_home/users/" element={<Admin2Users users={users} />}/>
          <Route path="admin_home/users/:id"
                             element = {< Admin3UserInfo
                                          users={users}
                                          deleteUser={deleteUser}
                                        />
                                                        }
          />
           <Route path="/admin_home/users/edit/:id" element={<Admin5UserUpdates  updateUser={updateUser} roles={roles}/>}/>

          <Route path="admin_home/books/" element={<Admin2Books books={books}/>}/>
          <Route path="admin_home/books/:id"
                             element = {< Admin3BookInfo
                                          books={books}
                                          deleteBook={deleteBook}

                                        />
                                                        }
          />
          <Route path="/admin_home/books/edit/:id" element={<Admin5BookUpdates updateBook={updateBook}/>}/>

          <Route path="admin_home/loans/" element={<Admin2loans loans={loans} />}/>
          <Route path='admin_home/roles/' element={<Admin2Roles roles = {roles} deleteRole={deleteRole}/>}/>
          <Route path="admin_home/roles/save" element={<Admin3AddRoles saveRole={saveRole}
          getRoles={getRoles}/>}></Route>

          <Route path="added_success" element={<AddedBookToDBSuccess />} />
          <Route path="user_account" element={<UserAccount />} />
          <Route path="create_recommendation" element={<CreateRecommendation />} />
          <Route path="displayBook" element={<DisplayBook />} />
          <Route path="event_form" element={<EventsForm /> } />
          <Route path="library_search" element={<LibrarySearch /> } />
          <Route path="*" element={<NoPage />} />
          <Route path="recommendation_success" element={<RecommendationSuccess />} />
          <Route path="remove_recommend" element={<RemoveRecommendations />} />
          <Route path="remove_search" element={<RemoveSearch />} />
          <Route path="remove_success" element={<RemoveBookSuccess />} />
          <Route path="search" element={<Search />} />
          <Route path="user_sign_in" element={<UserSignIn />} />
          <Route path="user_registration" element={<UserRegistration />} />
          <Route path="user_dashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
