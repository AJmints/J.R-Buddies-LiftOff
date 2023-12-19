import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserRegistration from './Pages/UserRegistration'
import UserSignin from './Pages/UserSignin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAccount from "./pages/AdminAccount";
import AdvancedSearch from "./pages/AdvancedSearch";
import BookInfoAndRating from "./pages/BookInfoAndRating";
import CustomerAccount from "./pages/CustomerAccount";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import SearchResults from "./pages/SearchResults";
import UserRegistration from "./pages/UserRegistration";
import UserSignIn from "./pages/UserSignin";
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



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Routes in alphabetical order to be easier to find */}
          <Route path="admin_account" element={<AdminAccount />} />
          <Route path="advanced_search" element={<AdvancedSearch />} />
          <Route path="book_info_and_rating" element={<BookInfoAndRating />} />
          <Route path="customer_account" element={<CustomerAccount />} />
          <Route path="*" element={<NoPage />} />
          <Route path="search_results" element={<SearchResults />} />
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
