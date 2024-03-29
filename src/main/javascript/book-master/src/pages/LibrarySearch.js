import {useEffect, useState} from 'react';
import axios from "axios";
import UserResults from "../components/UserResults";
import { useLocation } from 'react-router-dom';

const LibrarySearch=()=>{
    const location = useLocation();
    const data = location.state;
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [bookData, setBookData] = useState([]);
    const [show, setShow] = useState(false);
    const userId = data[1].user;

    useEffect(() => {
        console.log(userId);
        if (data[0].keyword !== null && data[0] !== "") {
            setSearch(data[0].keyword);

            axios.get("http://localhost:8080/book/search_results?column="+category+"&searchTerm="+data[0].keyword.trim())
            .then(res=>setBookData(res.data))
            .catch(err=>console.log(err));

            setShow(true);
        } else {}
    }, [])

    const searchLibrary = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8080/book/search_results?column="+category+"&searchTerm="+search.trim())
        .then(res=>setBookData(res.data))
        .catch(err=>console.log(err));

        setShow(true);
    }

    return(
        <>
            <div className='container mt-3'>
                <h2>Look For Books</h2>
                <form onSubmit = {searchLibrary}>
                    <input type="text" placeholder="Enter Search Term" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <br></br>
                    <label>
                        Search Category
                        <select value={category} onChange={e=>setCategory(e.target.value)}>
                            <option value="all" selected> ALL </option>
                            <option value="title"> TITLE </option>
                            <option value="author"> AUTHOR </option>
                        </select>
                    </label>
                    <br></br>
                    <button type="submit">Search</button>
                </form>
            </div>


            <div id="resultsDiv" style={{display: (show ? 'block' : 'none')}}>
                <UserResults results={[bookData, userId]} />
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>)
}

export default LibrarySearch;