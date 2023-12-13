import react, {useState} from "react";
import axios from "axios";

const Search=()=>{
    const [search, setSearch] = useState("");

    const searchBook = (e) => {
        e.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBp48rUKYmtTfkAGAktCqmsmgOZAjRxR3g')
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

    return(
        <>
            <div>
                <h2>Search Books</h2>
                <form onSubmit = {searchBook}>
                    <input type="text" placeholder="Enter Book Name" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>)
}

export default Search;