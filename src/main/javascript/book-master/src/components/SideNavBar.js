// SideNavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNavBar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-md-3 d-none d-md-block bg-dark sidebar'> 
         <div className='sidebar-sticky'>
         <h2 className='text-white'>My Borrowing</h2>
            <ul className='nav flex-column mt-3'> 
              <li className='nav-item'>
                <Link to="/" className='nav-link text-white active'>Checked Out</Link>
              </li>
              <li className='nav-item'>
                <Link to="/page1" className='nav-link text-white'>On Hold</Link>
              </li>
              <li className='nav-item'>
                <Link to="/page2" className='nav-link text-white'>Fees</Link>
              </li>
            </ul>
          </div>
          </nav>
        <div className='col-md-9'>
          {/*Content of the page goes here*/}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
