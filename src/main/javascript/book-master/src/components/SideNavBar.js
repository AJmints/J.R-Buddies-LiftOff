// SideNavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNavBar = ({userId}) => {
  return (
    <div>
      <nav className='d-none d-md-block bg-dark sidebar'> 
      <div className='sidebar-sticky'>
        <h2 className='text-white'>My Borrowing</h2>
          <ul className='nav flex-column mt-3'> 
            <li className='nav-item'>
              <Link to="/user_loans" className='nav-link text-white active' state={userId}>Checked Out</Link>
              </li>
              <li className='nav-item'>
                <Link to="/page1" className='nav-link text-white' state={userId}>On Hold</Link>
              </li>
              <li className='nav-item'>
                <Link to="/user_reviews" className='nav-link text-white' state={userId}>BookReviews</Link>
              </li>
              <li className='nav-item'>
                <Link to="/page2" className='nav-link text-white' state={userId}>Fees</Link>
              </li>
            </ul>
          </div>
          </nav>
        <div className='col-md-9'>
          {/*Content of the page goes here*/}
        </div>
    </div>
  );
};

export default SideNavBar;
