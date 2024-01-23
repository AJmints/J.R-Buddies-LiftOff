import React , {useState} from 'react';
import axios from "axios";
import DisplayResults from "../components/DisplayResults";

const Search=()=>{

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [show, setShow] = useState(false);

    const searchBook = (e) => {
        e.preventDefault();
        //Need to replace the key if this isn't working. Replace AIzaSyBp48rUKYmtTfkAGAktCqmsmgOZAjRxR3g in the get request
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBp48rUKYmtTfkAGAktCqmsmgOZAjRxR3g'+'&maxResults=40')
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err));

        setShow(true);
    }

    return(
        <>
            <div className='container mt-3'>
                <h2>Search For Books</h2>
                <form onSubmit = {searchBook}>
                    <input type="text" placeholder="Enter Keyword" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
            </div>

            <br />

            <div style={{display: (show ? 'block' : 'none')}}>
                <DisplayResults results={bookData} />
            </div>
        </>)
}

export default Search;