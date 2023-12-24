import React, {useState} from 'react';

function DisplayBook({id}) {
    const [bookData, setBookData] = useState([]);

    axios.get("http://localhost:8080/book/"+id)
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err));
    return(
        <div>
            <p>Title: {bookData.getTitle()}</p>
        </div>
    );
}

export default DisplayBook;