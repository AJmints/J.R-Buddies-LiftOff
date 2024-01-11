import react, { useState, useEffect , useCallback} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteRecommendation=({results})=>{
    const[checked, setChecked] = useState([]);
    const[books, setBooks] = useState([]);
    const[book, setBook] = useState({});
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

    const removeRecommend = (event) => {
        event.preventDefault();

        checked.map((recommendationId) => {
            axios.delete(`http://localhost:8080/recommendation/${recommendationId}`)
            .then((response) => {console.log(`Successfully Deleted Recommendation ${recommendationId}`);})
            .catch(err => console.log(err.response.data.message));
        });

        navigate('/recommendation_success');
    }

    return(
        <div className = "DatabaseBookList">
            <div className = "bookList_container">
                {
                    results.map((book, index) => {
                        return(
                            <div key={index} className="bookCard">
                                <img src={book.thumbnail} alt="img"/>
                                <br></br>
                                <input value={book.recID} type="checkbox" onChange={handleChecks}/>
                                <div className="cardBottom">
                                    <h5>{book.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
            <button onClick={removeRecommend}>Remove Selected Recommendations</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default DeleteRecommendation;