import react, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRecommendationListing=(results)=>{
    const navigate = useNavigate();
    const [recData, setRecData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [userBooks, setUserBooks] = useState([]);

    const fetchRecs = () => {
        axios.get("http://localhost:8080/recommendation/search?idType=user&idValue="+results.idValue)
            .then(res=>setRecData(res.data))
            .catch(err=>console.log(err));
    }

    const fetchBooks = () => {
        axios.get("http://localhost:8080/book/all")
            .then(res=>setBookData(res.data))
            .catch(err=>console.log(err));
    }

    const recsToBooks = () => {
        for(let i in recData){
            for(let j in bookData){
                const found = userBooks.some(bk => bk.id === bookData[j].id);
                if(!found && recData[i].bookId === bookData[j].id){
                    setUserBooks(userBooks => [...userBooks, bookData[j]]);
                }
            }
        }
    }

    useEffect(() => {
        fetchBooks();
        fetchRecs();
        recsToBooks();
    }, []);

    return(
        <div className = "bookList_container">
            {
            userBooks.map((book, index) => {
                return(
                    <div key={index} className="bookCard">
                        <br></br>
                        <figure>
                            <img
                                src={book.thumbnail}
                                width="200"
                                height="300"
                                role="link"
                                onClick={() => navigate(`/displaybook`, {state: {book}})}
                            />
                        </figure>
                        <div className="cardBottom">
                            <h5>{book.title}</h5>
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
}

export default UserRecommendationListing;