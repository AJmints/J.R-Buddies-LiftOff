import react from 'react';

const RemoveBookSuccess = () =>{

    return(
        <>
            <div className='container mt-3'>
                <h1>Book(s) Removed From Database Successfully</h1>
                <a href="/"><h3>Return Home</h3></a>
                <a href="/remove_search"><h3>Remove More Books</h3></a>
            </div>
        </>)
}

export default RemoveBookSuccess;