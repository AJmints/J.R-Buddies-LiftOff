import { useNavigate } from "react-router-dom";

const UserResults=({results})=>{
    const bookData = results[0];
    const userId = results[1];
    const navigate = useNavigate();

    if(Object.keys(results).length === 0){
        return(
            <div className="container">
                <br></br>
                <br></br>
                <h2>No Results Found. Try Again.</h2>
            </div>
        )
    }

    return(
        <div className="bookList_container container">
            {
            bookData.map((book, index) => {
                return(
                    <div key={index}>
                        <br></br>
                        <figure className="bookCard">
                            <img
                                src={book.thumbnail}
                                width="200"
                                height="300"
                                role="link"
                                onClick={() => navigate(`/displaybook`, {state: [{book},{userId}]})}
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
    )
}

export default UserResults;