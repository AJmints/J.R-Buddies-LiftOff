import react, {useState} from "react";

const Search=()=>{
    const [search, setSearch] = useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            console.log("Search Confirmed");
        }
    }

    return(
        <>
            <div>
                <h2>Search Books</h2>
                <div>
                    <input type="text" placeholder="Enter Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyUp={searchBook}/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </>)
}

export default Search;