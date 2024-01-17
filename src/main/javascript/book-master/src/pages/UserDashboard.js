import React , {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import MyShelf from "../components/MyShelfAvailable";
import UserRecommendationListing from "../components/UserRecommendationListing";


const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <h1>My Library Dashboard</h1>
      <div className="row">
        <div className="col-md-2">
          <SideNavBar />
          <br></br>
          {/* My Profile*/}
        </div>
        <div className="col-md-10">
          <MyShelf />
        </div>
        <div className="col-md-10">
          <UserRecommendationListing idValue={1}/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
