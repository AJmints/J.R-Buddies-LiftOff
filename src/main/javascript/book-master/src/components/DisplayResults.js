import react, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const DisplayResults=({results})=>{
    const[checked, setChecked] = useState([]);

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

            const book = {'title':arr[0], 'author':arr[1], 'description':arr[2], 'thumbnail':arr[3],
                        'isbn':arr[4], 'genre':arr[5], 'total_quantity':1, 'available_quantity':1};

            const config = {
                method: 'post',
                url: 'http://localhost:8080/book/save',
                headers: {'Content-Type':'application/json'},
                data: JSON.stringify(book)
            };

            //TODO:Later have it redirect to a added success page and have hyperlinks to search and home pages
            axios(config)
            .then((response) => {console.log(response);})
            .catch(err => console.log(err));
        });
    }

    return(
        <div className = "bookList">
            <div className="checkList">
                {
                    results.map((item, index) => {
                        let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        
                        return(
                            <div key={index}>
                                <img src={bookImg} alt="img"/>
                                <br></br>
                                <input value={[item.volumeInfo.title, "~",item.volumeInfo.authors,"~",
                                    item.volumeInfo.description,"~", bookImg,"~", item.id,"~", item.volumeInfo.categories]} type="checkbox" onChange={handleChecks}/>
                                <span>{item.volumeInfo.title}</span>
                            </div>
                        )
                    })
                }
                <br></br>
                <button onClick={saveBooksToDatabase}>Save Selected Books</button>
            </div>
        </div>
    )
}

export default DisplayResults;