import react from "react";
import {Link} from "react-router-dom";

const DisplayResults=({results})=>{
    console.log(results[0]);
    return(
        <>
            {
                results.map((item) => {
                    let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let eBook = item.saleInfo && item.saleInfo.isEbook;
                    let bookInfo = {title: item.volumeInfo && item.volumeInfo.title};
                    console.log(bookInfo);
                    if(bookImg !== undefined && eBook !== undefined){
                        if(eBook){
                            return(
                                <>
                                <div>
                                    <img src={bookImg} alt="img"/>
                                    <div>
                                        <h3>{item.volumeInfo.title}</h3>
                                        <p>eBook version is available</p>
                                        <Link to={{pathname:"/DisplayBook", state: bookInfo}}>
                                            Click to Look at Book Details
                                        </Link>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        else{
                            return(
                                <>
                                <div>
                                    <img src={bookImg} alt="img"/>
                                    <div>
                                        <h3>{item.volumeInfo.title}</h3>
                                        <p>eBook version is not available</p>
                                        <Link to={{pathname:"/DisplayBook", state: bookInfo}}>
                                            Click to Look at Book Details
                                        </Link>
                                    </div>
                                </div>
                                </>
                            )
                        }
                    }
                    return(
                        <>
                        </>
                    )
                })
            }
        </>
    )
}

/*
*/

export default DisplayResults;