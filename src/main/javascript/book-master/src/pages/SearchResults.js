import { Link } from "react-router-dom";

const SearchResults = () => {
    return <div className="container mt-3">
        <h1>Keyword: Search Results</h1>
            <div className="row">
                <div className="col">Image</div>
                <div className="col"><Link to="/book_info_and_rating"><h3>Title:</h3></Link></div>
                <div className="col"><button>Checkout</button></div>
                <div className="col"><button>Place Hold</button></div>
            </div>
            <div className="row">
                <div className="col">Image</div>
                <div className="col"><Link to="/book_info_and_rating"><h3>Title:</h3></Link></div>
                <div className="col"><button>Checkout</button></div>
                <div className="col"><button>Place Hold</button></div>
            </div>
            <div className="row">
                <div className="col">Image</div>
                <div className="col"><Link to="/book_info_and_rating"><h3>Title:</h3></Link></div>
                <div className="col"><button>Checkout</button></div>
                <div className="col"><button>Place Hold</button></div>
            </div>
        </div>
};

export default SearchResults;