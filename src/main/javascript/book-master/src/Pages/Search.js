import react, {useState} from "react";
import axios from "axios";
import DisplayResults from "../components/DisplayResults";

const Search=()=>{

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);

    const searchBook = (e) => {
        e.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBp48rUKYmtTfkAGAktCqmsmgOZAjRxR3g'+'&maxResults=40')
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err));
    }

    return(
        <>
            <div>
                <h2>Search For Books</h2>
                <form onSubmit = {searchBook}>
                    <input type="text" placeholder="Enter Keyword" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div>
                <DisplayResults results={bookData} />
            </div>
        </>)
}

export default Search;