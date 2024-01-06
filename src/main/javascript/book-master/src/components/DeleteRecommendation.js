import react, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteRecommendation=({results})=>{
    const[checked, setChecked] = useState([]);
    const[books, setBooks] = useState({});
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

    useEffect(() => {
         results.map((rec, index) => {
            axios.get("http://localhost:8080/book/"+rec.bookId)
            .then(res => res.data.map(book => {
                var update = {...books, rec.id:book};
                setBooks(update);
            }))
            .catch(err=>console.log(err));
         })
    }, []);

    const removeRecommend = (event) => {
        event.preventDefault();

        checked.map((recommendationId) => {
            /*axios.delete(`http://localhost:8080/recommendation/${recommendationId}`)
            .then((response) => {console.log(`Successfully Deleted Book ${bookId}`);})
            .catch(err => console.log(err.response.data.message));*/
        });

        //navigate('/remove_success');
    }

    return(
        <div className = "DatabaseBookList">
            <div className="checkList">
                {
                    Object.entries(books).map(([recID, book], index) => {
                        return(
                            <div key={index}>
                                <img src={book.thumbnail} alt="img"/>
                                <br></br>
                                <input value={recID} type="checkbox" onChange={handleChecks}/>
                                <span>{book.title}</span>
                            </div>
                        )
                    })
                }
                <br></br>
                <button onClick={removeRecommend}>Remove Selected Recommendations</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default DeleteRecommendation;