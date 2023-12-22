import react , {useState} from 'react';
import axios from "axios";

const LibrarySearch=()=>{

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchCategories = ["all", "title", "author"];

    const searchLibrary = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/book/all")
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err));
    }

    return(
        <>
            <div className='container mt-3'>
                <h2>Look For Books</h2>
                <form onSubmit = {searchLibrary}>
                    <input type="text" placeholder="Enter Search Term" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </>)
}

export default LibrarySearch;