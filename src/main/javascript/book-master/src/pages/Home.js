
import React, { useEffect, useState } from 'react';
import DisplayEvents from "../components/Events/DisplayEvents";
import axios from 'axios';
import DisplayLatestBooks from '../components/DisplayLatestBooks';

const Home = () => {

    return <div className="container mt-3 mb-5 pb-5">
        <h1>Home</h1>

        <div>
            <DisplayLatestBooks />
        </div>
        <div>
            <DisplayEvents />
        </div>
    </div>
};

export default Home;