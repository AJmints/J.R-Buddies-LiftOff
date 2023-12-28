import react from 'react';

const AddedBookToDBSuccess=()=>{

    return(
        <>
            <div className='container mt-3'>
                <h1>Book(s) Added Successfully</h1>
                <a href="/"><h3>Return Home</h3></a>
                <a href="/search"><h3>Search Again</h3></a>
            </div>
        </>)
}

export default AddedBookToDBSuccess;