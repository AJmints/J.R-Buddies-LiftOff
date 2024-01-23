import React , {useEffect, useState} from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function UserLoans () {
    const location = useLocation();
    const userId = location.state;
    const [loans, setLoans] = useState([]);
    const [book, setBook] = useState("");
    const loanDateOut = new Date()
    function calcLoanDateOut(date) {
        date.setDate(date.getDate() + 7*3);
        return date
    }
    const loanDateIn = calcLoanDateOut(new Date);
    const [confirmBookRenewMsg, setConfirmBookRenewMsg] = useState(false);
    const [bookRenewed, setBookRenewed] = useState(false);
    const [confirmBookReturnMsg, setConfirmBookReturnMsg] = useState(false);
    const [bookReturned, setBookReturned] = useState(false);
    const title = book.title;
    const author = book.author;
    const isbn = book.isbn;
    const genre = book.genre;
    const total_quantity = book.total_quantity;
    const available_quantity = (Number(book.available_quantity)+1);
    const [toggleDisplay, setToggleDisplay] = useState(true);
    const [ data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/loans/"+userId)
        .then(res=>setLoans(res.data))
    }, [])

    const confirmBookRenew = (e) => {
        const loanData = e.split(",");
        setData(loanData);
        console.log(data)

        axios.get("http://localhost:8080/book/"+loanData[1])
        .then(res=>setBook(res.data))
        .catch(err=>console.log(err));

        setConfirmBookRenewMsg(true);
        setToggleDisplay(false);
    }

    const confirmBookReturn = (e) => {
        const loanData = e.split(",");
        setData(loanData)
        console.log(loanData)

        axios.get("http://localhost:8080/book/"+loanData[1])
        .then(res=>setBook(res.data))
        .catch(err=>console.log(err));

        setConfirmBookReturnMsg(true);
        setToggleDisplay(false);

    }

    const renewBook = (e) => {

        axios.put("http://localhost:8080/loan/"+e, {book, userId, loanDateOut, loanDateIn})
        .then(function(res) {
            setConfirmBookRenewMsg(false);
            setBookRenewed(true);
        })
        .catch(err=>console.log(err))

        setTimeout(()=>window.location.reload(), 2000);
    }

    const returnBook = (e) => {

        axios.delete("http://localhost:8080/loan/"+data[0])
        .then(function(res) {
            // on successful post adds 1 to available quantity
            axios.put("http://localhost:8080/book/"+data[1], {title, author, isbn, genre, total_quantity, available_quantity})
            .then(function(res) {
                setConfirmBookReturnMsg(false);
                setBookReturned(true);
            })
            .catch(err=>console.log(err));

        })
        .catch(err => console.log(err.res))

        setTimeout(()=>window.location.reload(), 2000);

    }


    return <div className="container mt-3 pb-5 mb-5" >
        
            <div className="my-4">
                <Link to="/" className="nav-link" >Return Home</Link>
                <Link to="/user_dashboard" className="nav-link" state={userId}>Return to Dashboard</Link>
            </div>
            
            <h3>Currently Checked out Books:</h3>

            <p className="text-secondary mt-5 ms-5" style={{display: loans.length === 0 ? "" : "none"}}>No Books Currently Checked Out</p>

            <div id="user_Book_Confirm" className="row border border-3" style={{display: toggleDisplay ? "none" : ""}}>
                <div  className='col-1'>
                    <img src={data[2]} height={125} alt={data[3]}/>
                </div>
                <div  className='col-8 mt-5'>
                    <p><span style={{fontWeight: "bold"}}> Book:</span> {data[3]}</p>
                </div>
                <div  className='col-2 mt-5'>
                    {confirmBookRenewMsg && (<p className='text-danger'>Please Confirm Renew</p>)}
                    {confirmBookReturnMsg && (<p className='text-danger'>Please Confirm Return</p>)}
                    {bookRenewed && (<p className='text-success'>Renew Successful!</p>)}
                    {bookReturned && (<p className='text-success'>Return Successful!</p>)}
                </div>
                <div  className='col-1 mt-5'>
                    
                    <div id="renew_button" style={{display: confirmBookRenewMsg ? "block" : "none"}}>
                        <button type='submit' className="btn btn-primary" value={data[0]} onClick={(e)=>renewBook(e.target.value)}>Renew</button>
                    </div>
                    
                    <div id="return_button" style={{display: confirmBookReturnMsg ? "block" : "none"}}>
                        <button type='submit' className="btn btn-secondary" value={data[0]}  onClick={(e)=>returnBook(e.target.value)}>Return</button>
                    </div>
                </div>
            </div>

            <div id="loans_mapping" style={{display: toggleDisplay ? "" : "none"}}>
                {loans.map((loan, index) => {
                    return(
                        <div key={index} className="row border border-3">
                            <div className='col-1'>
                                <img src={loan.book.thumbnail} height={125} alt={loan.book.title}/>
                            </div>
                            <div  className='col-4 mt-5'>
                                <p><span style={{fontWeight: "bold"}}> Book:</span> {loan.book.title}</p>
                            </div>
                            <div  className='col-3 mt-5'>
                                <p><span style={{fontWeight: "bold"}}>Date Checked out:</span> {Intl.DateTimeFormat('en-US').format(loanDateOut)}</p>
                            </div>
                            <div className='col-3 mt-5'>
                                <p><span style={{fontWeight: "bold"}}>Due Date: </span> {Intl.DateTimeFormat('en-US').format(loanDateIn)}</p>
                            </div>
                            <div className="col-1 mt-4">
                                <div>
                                    <button type='submit' className="btn btn-primary" value={[loan.id, loan.book.id, loan.book.thumbnail, loan.book.title]} onClick={(e)=>confirmBookRenew(e.target.value)}>Renew</button>
                                </div>
                                <div>
                                    <button type='submit' className="btn btn-secondary" value={[loan.id, loan.book.id, loan.book.thumbnail, loan.book.title]}  onClick={(e)=>confirmBookReturn(e.target.value)}>Return</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>

};

export default UserLoans;