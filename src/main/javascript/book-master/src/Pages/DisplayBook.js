import React, { useState } from 'react';
import ReviewAndRating from '../components/ReviewAndRating';
// import axios from 'axios';

function DisplayBook() {

    

    return( <div className='container mt-5'>
            <h1>Title: </h1>
            <ReviewAndRating />
        </div>
    );
}

export default DisplayBook;