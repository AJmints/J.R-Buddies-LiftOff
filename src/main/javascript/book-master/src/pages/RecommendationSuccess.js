import react from 'react';

const RecommendationSuccess = () =>{

    return(
        <>
            <div className='container mt-3'>
                <h1>Recommendation Transaction Completed</h1>
                <a href="/"><h3>Return Home</h3></a>
                <a href="/library_search"><h3>Look At Other Books</h3></a>
            </div>
        </>)
}

export default RecommendationSuccess;