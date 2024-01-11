import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRecommendationListing=(idValue)=>{
    const navigate = useNavigate();
    const [recData, setRecData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [userBooks, setUserBooks] = useState([]);

    const fetchRecs = () => {
        axios.get("http://localhost:8080/recommendation/search?idType=user&idValue="+idValue)
            .then(res=>setBookData(res.data))
            .catch(err=>console.log(err));
    }

    const fetchBooks = () => {
        axios.get("http://localhost:8080/api/book/all")
            .then(res=>setBookData(res.data))
            .catch(err=>console.log(err));
    }

    const recsToBooks = () => {
        for(const rec of recData){
            for(const book of bookData){
                if(rec.bookId === book.id){
                    var updates = [...userBooks];
                    updates = [...userBooks, book];
                    setUserBooks();
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
        <div className = "bookList container">
            {
            userBooks.map((book, index) => {
                return(
                    <div key={index}>
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
                        <h5>{book.title}</h5>
                    </div>
                )
            })
        }
        </div>
    );
}

export default UserRecommendationListing;