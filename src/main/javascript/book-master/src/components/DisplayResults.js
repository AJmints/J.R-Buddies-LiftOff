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
        checked.map((item) => {
            console.log(item)
            //Create book component to hold information
            const book = {item[0], item[1], description}

            //TODO: Uncomment when adding books to database has been implemented
            //Remember to add @CrossOrigin to the Book Controller
            /*
            fetch("http://localhost:8080/book/save", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(book)
            }).then(()=>{
                console.log("Book added")
            })*/
        });
    }

    return(
        <div className = "bookList">
            <div className="checkList">
                {
                    results.map((item, index) => {
                        let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        let eBook = item.saleInfo && item.saleInfo.isEbook;
                        let bookInfo = {title: item.volumeInfo && item.volumeInfo.title};
                        console.log(item);
                        
                        return(
                            <div key={index}>
                                <img src={bookImg} alt="img"/>
                                <br></br>
                                <input value={[item.volumeInfo.title, item.volumeInfo.authors, bookImg, 
                                    item.volumeInfo.description, item.volumeInfo.categories, item.id]} type="checkbox" onChange={handleChecks}/>
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
                                <div  className="container mt-3">
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
                                <div className="container mt-3">
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