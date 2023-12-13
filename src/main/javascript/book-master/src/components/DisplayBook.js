import react from "react";

const DisplayBook=({book})=>{
    console.log(book);
    return(
        <>
            {
                book.map((item) => {
                    let bookImg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let eBook = item.saleInfo && item.saleInfo.isEbook;
                    if(bookImg !== undefined && eBook !== undefined){
                        if(eBook){
                            return(
                                <>
                                <div>
                                    <img src={bookImg} alt="img"/>
                                    <div>
                                        <h3>{item.volumeInfo.title}</h3>
                                        <p>eBook version is available</p>
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

export default DisplayBook;