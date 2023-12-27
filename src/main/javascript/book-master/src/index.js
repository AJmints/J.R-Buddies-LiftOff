import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAccount from "./pages/AdminAccount";
import CustomerAccount from "./pages/CustomerAccount";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import UserRegistration from "./pages/UserRegistration";
import UserSignIn from "./pages/UserSignin";
import reportWebVitals from './reportWebVitals';
import Search from './pages/Search'
import DisplayBook from './pages/DisplayBook';
import EventsForm from './pages/EventsForm'
import AddedBookToDBSuccess from "./pages/AddedBookToDBSuccess";
import LibrarySearch from "./pages/LibrarySearch";
import RemoveSearch from "./pages/RemoveSearch";
import RemoveBookSuccess from "./pages/RemoveBookSuccess";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Routes in alphabetical order to be easier to find */}
          <Route path="admin_account" element={<AdminAccount />} />
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
