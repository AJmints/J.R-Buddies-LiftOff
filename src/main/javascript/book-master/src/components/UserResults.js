import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserResults=({results})=>{

    return(
        <div className = "bookList">
            results.map((book, index) => {
                return(
                    <div key={index}>
                        <a href={`/displayBook?img_id=${book.getId()}`}>
                            <img src={book.getThumbnail()} width="200" height="300"/>
                        </a>
                        <br></br>
                        <span>{book.getTitle()}</span>
                    </div>
                )
            })
        </div>
    )
}

export default UserResults;