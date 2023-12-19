import React from 'react';

function DisplayBook({props}) {
    const {state} = props.location;
    const {title} = state;
    return(
        <div>
            <p>Title: {title}</p>
        </div>
    );
}

export default DisplayBook;