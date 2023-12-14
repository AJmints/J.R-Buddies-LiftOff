import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AdminAccount from "./pages/AdminAccount";
import AdvancedSearch from "./pages/AdvancedSearch";
import BookInfoAndRating from "./pages/BookInfoAndRating";
import CustomerAccount from "./pages/CustomerAccount";
import LoginAndRegister from "./pages/LoginAndRegister";
import NoPage from "./pages/NoPage";
import SearchResults from "./pages/SearchResults";
import reportWebVitals from './reportWebVitals';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin_account" element={<AdminAccount />} />
          <Route path="advanced_search" element={<AdvancedSearch />} />
          <Route path="book_info_and_rating" element={<BookInfoAndRating />} />
          <Route path="customer_account" element={<CustomerAccount />} />
          <Route path="login_and_register" element={<LoginAndRegister />} />
          <Route path="search_results" element={<SearchResults />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

reportWebVitals(console.log);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
