import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DisplayResults=({results})=>{
    const[checked, setChecked] = useState([]);
    const navigate = useNavigate();

    const handleChecks = (event) => {
        var updates = [...checked];
        if(event.target.checked){
            updates = [...checked, event.target.value];
        }
        else{
            updates.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updates);
    };

    const saveBooksToDatabase = (event) => {
        event.preventDefault();

        checked.map((item) => {
            //Create array for book info
            const arr = item.replaceAll(',', '').split("~");

            const book = {'title':arr[0], 'author':arr[1], 'description':arr[2].substring(0, 200), 'thumbnail':arr[3],
                        'isbn':arr[4], 'genre':arr[5], 'total_quantity':1, 'available_quantity':1};

            const config = {
                method: 'post',
                url: 'http://localhost:8080/book/save',
                headers: {'Content-Type':'application/json'},
                data: JSON.stringify(book)
            };

            axios(config)
            .then((response) => {console.log(response);})
            .catch(err => console.log(err.response.data.message));
        });

        navigate('/added_success');
    }

    return(
        <div>
        <div className= "bookList_container">
            {
                results.map((item, index) => {
                    let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

                    return(
                        <div key={index} className="bookCard">
                            <img src={bookImg} width="200" height="300"alt="img"/>
                            <br></br>
                            <input value={[item.volumeInfo.title, "~",item.volumeInfo.authors,"~",
                                item.volumeInfo.description,"~", bookImg,"~", item.id,"~", item.volumeInfo.categories]} type="checkbox" onChange={handleChecks}/>
                            <div className="cardBottom">
                                <h5>{item.volumeInfo.title}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <br></br>
        <button onClick={saveBooksToDatabase}>Save Selected Books</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}

export default DisplayResults;