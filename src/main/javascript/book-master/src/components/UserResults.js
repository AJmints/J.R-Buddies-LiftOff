import react from "react";
import { useNavigate } from "react-router-dom";

const UserResults=({results})=>{
    const navigate = useNavigate();

    if(Object.keys(results).length === 0){
        return(
            <div>
                <br></br>
                <br></br>
                <h2>No Results Found. Try Again.</h2>
            </div>
        )
    }

    return(
        <div className = "bookList">
            {
                //Having trouble with the state property, will not send any data to displaybook
            results.map((book, index) => {
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
    )
}

export default UserResults;