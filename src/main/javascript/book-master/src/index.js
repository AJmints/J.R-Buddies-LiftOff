import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminAccount from "./Pages/AdminAccount";
import AdminHome from './Pages/AdminHome';
import AdminUserInfo from './Pages/AdminUserInfo';
import AdminUsers from './Pages/AdminUsers';
import CustomerAccount from "./Pages/CustomerAccount";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import UserRegistration from "./Pages/UserRegistration";
import UserSignIn from "./Pages/UserSignin";
import reportWebVitals from './reportWebVitals';
import Search from './Pages/Search'
import DisplayBook from './Pages/DisplayBook';




export default function App() {

  const [users, setUsers] = useState([]);
  
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
    useEffect(() => {
        getUsers();
      }, []);




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          {/* Routes in alphabetical order to be easier to find */}
          <Route path="admin_account" element={<AdminAccount />} />
          <Route path="admin_home" element={<AdminHome />}/>
          <Route path="admin_home/users/" element={<AdminUsers users={users} />}/>
          <Route path="admin_home/users/:id"
                             element = {< AdminUserInfo 
                                          users={users}
                                          deleteUser={deleteUser}
                                        />
                                                        } 
          />      
          <Route path="customer_account" element={<CustomerAccount />} />
          <Route path="displayBook" element={<DisplayBook />} />
          <Route path="*" element={<NoPage />} />
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
