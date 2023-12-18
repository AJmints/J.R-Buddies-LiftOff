import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserRegistration from './Pages/UserRegistration'
import UserSignin from './Pages/UserSignin'
import reportWebVitals from './reportWebVitals';
import Search from './Pages/Search'
import DisplayBook from './Pages/DisplayBook';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "registration",
    element: <UserRegistration/>,
  },
  {
    path: "signin",
    element: <UserSignin/>,
  },
  {
      path: "search",
      element: <Search />,
  },
  {
      path: "displayBook",
      element: <DisplayBook />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
