import React from "react";
import { Link } from "react-router-dom";


const MyShelf = () => {
    return(
       <div>
        <h2>My Shelf</h2>
        {/* Display saved books that are available for checkout */}
        <Link to="/">View my For Later Shelf</Link>
       </div>
    )
}

export default MyShelf;