import react, { useState } from "react";
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
        console.log(checked);

        //Create book component to hold information
        //const book = {title, author, description}

        //TODO: Uncomment when adding books to database has been implemented
        //Remember to add @CrossOrigin to the Book Controller
        /*
        fetch("http://localhost:8080/book/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(checked)
        }).then(()=>{
            console.log("Books added")
        })*/
    }

    return(
        <div className = "bookList">
            <div className="checkList">
                {
                    results.map((item, index) => {
                        let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        let eBook = item.saleInfo && item.saleInfo.isEbook;
                        let bookInfo = {title: item.volumeInfo && item.volumeInfo.title};
                        
                        return(
                            <div key={index}>
                                <img src={bookImg} alt="img"/>
                                <br></br>
                                <input value={[item.volumeInfo.title, bookImg, item.volumeInfo.description]} type="checkbox" onChange={handleChecks}/>
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

/*
if(bookImg !== undefined && eBook !== undefined){
                        if(eBook){
                            return(
                                <>
                                <div>
                                    <img src={bookImg} alt="img"/>
                                    <div>
                                        <h3>{item.volumeInfo.title}</h3>
                                        <p>eBook version is available</p>
                                        <Link to={{pathname:"/DisplayBook", state: bookInfo}}>
                                            Click to Look at Book Details
                                        </Link>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        else{
                            return(
                                <>
                                <div>
                                    <img src={bookImg} alt="img"/>
                                    <div>
                                        <h3>{item.volumeInfo.title}</h3>
                                        <p>eBook version is not available</p>
                                        <Link to={{pathname:"/DisplayBook", state: bookInfo}}>
                                            Click to Look at Book Details
                                        </Link>
                                    </div>
                                </div>
                                </>
                            )
                        }
                    }
*/

export default DisplayResults;