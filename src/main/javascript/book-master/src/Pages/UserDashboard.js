import React , {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import MyShelf from "../components/MyShelfAvailable";

const UserDashboard = () => {
    return (
        <div>
            <h1>My Library Dashboard</h1>
            <SideNavBar />

            <div className="col-md-9">
            <MyShelf />
            </div>

        </div>
    )
}

export default UserDashboard;