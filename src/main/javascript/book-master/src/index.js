import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


import AdminAccount from "./temp/AdminAccount";
import Admin1Home from './temp/Admin1Home';
import Admin2Books from './temp/Admin2Books';
import Admin2Users from './temp/Admin2Users';
import Admin3UserInfo from './temp/Admin3UserInfo';
import Admin3BookInfo from './temp/Admin3BookInfo'
import CustomerAccount from "./pages/CustomerAccount";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import UserRegistration from "./temp/UserRegistration";
import UserSignIn from "./temp/UserSignin";
import reportWebVitals from './reportWebVitals';
import Search from './temp/Search'
import DisplayBook from './temp/DisplayBook';
import Admin5BookUpdates from './temp/Admin5BookUpdates';
import Admin5UserUpdates from './temp/Admin5UserUpdates';

import EventsForm from './temp/EventsForm'
import AddedBookToDBSuccess from "./temp/AddedBookToDBSuccess";
import LibrarySearch from "./temp/LibrarySearch";
import RemoveSearch from "./temp/RemoveSearch";
import RemoveBookSuccess from "./temp/RemoveBookSuccess";


export default function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  
  
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


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          {/* Routes in alphabetical order to be easier to find */}
          <Route path="admin_account" element={<AdminAccount />} />

          <Route path="admin_home" element={<Admin1Home />}/>
          <Route path="admin_home/books/" element={<Admin2Books books={books} getBooks={getBooks}/>}/>
          <Route path="admin_home/users/" element={<Admin2Users users={users} />}/>
          <Route path="admin_home/users/:id"
                             element = {< Admin3UserInfo 
                                          users={users}
                                          deleteUser={deleteUser}
                                        />
                                                        } 
          />  
          <Route path="admin_home/books/:id"
                             element = {< Admin3BookInfo 
                                          books={books}
                                          deleteBook={deleteBook}
                                          
                                        />
                                                        } 
          /> 
          <Route path="/admin_home/books/edit/:id" element={<Admin5BookUpdates getBooks= {getBooks} updateBook={updateBook}/>}/>
          <Route path="/admin_home/user/edit/:id" element={<Admin5UserUpdates getUsers= {getUsers} updateUser={updateUser}/>}/>
          <Route path="added_success" element={<AddedBookToDBSuccess />} />
          <Route path="customer_account" element={<CustomerAccount />} />
          <Route path="displayBook" element={<DisplayBook />} />
          <Route path="event_form" element={<EventsForm /> } />
          <Route path="library_search" element={<LibrarySearch /> } />
          <Route path="*" element={<NoPage />} />
          <Route path="remove_search" element={<RemoveSearch />} />
          <Route path="remove_success" element={<RemoveBookSuccess />} />
          <Route path="search" element={<Search />} />
          <Route path="user_sign_in" element={<UserSignIn />} />
          <Route path="user_registration" element={<UserRegistration />} />
          
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

reportWebVitals(console.log);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
