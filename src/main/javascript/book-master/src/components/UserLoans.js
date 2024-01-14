import React , {useEffect, useState} from "react";
import axios from "axios";

function UserLoans () {
    const [userId, setUserId] = useState("");
    const [loans, setLoans] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [book, setBook] = useState("");
    const loanDateOut = new Date    
    function calcLoanDateOut(date) {
        date.setDate(date.getDate() + 7*3);
        return date
    }
    const loanDateIn = calcLoanDateOut(new Date)
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
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }, [])

    const selectUser = (e) => {
        setUserId(e.target.value);
            
        axios.get("http://localhost:8080/api/user/loans/"+userId)
        .then(res=>setLoans(res.data))
        .catch(err=>console.log(err));

        axios.get("http://localhost:8080/api/user/"+userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err));
    }

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
        const config = {
            method: 'put',
            url: "http://localhost:8080/loan/"+e,
            headers: ("Access-Control-Allow-Origin", "*"),
            data: {book, user, loanDateOut, loanDateIn}
        };

        axios(config)
        .then(function(res) {
            setConfirmBookRenewMsg(false);
            setBookRenewed(true);
        })
        .catch(err=>console.log(err));

        // axios.put("http://localhost:8080/loan/"+e, {book, user, loanDateOut, loanDateIn})
        // .then(function(res) {
        //     setConfirmBookRenewMsg(false);
        //     setBookRenewed(true);
        // })
        // .catch(err=>console.log(err))

        
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

    }


    return <div className="container mt-3 pb-5 mb-5" >
        
        <div id="users" style={{display: toggleDisplay ? "block" : "none"}}>
            <div className='row mt-2'>
                <div className='col-3 mt-2 mb-3'>
                    <label htmlFor="user" className='form-label'>User ID: {user.email} </label>
                    <select className="form-control" onClick={selectUser} required>
                            {users.map((user, index) => {
                                    return(
                            <option key={index} value={user.id}>{user.email}</option>)
                                })}
                    </select>
                </div>
            </div>
        </div>

            <h3>Currently Checked out Books:</h3>

            <div id="user_Book_Confirm" className="row border border-3" style={{display: toggleDisplay ? "none" : ""}}>
                <div  className='col-1'>
                    <img src={data[2]} height={125}/>
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

            <div id="loans_mapping" style={{display: toggleDisplay ? "block" : "none"}}>
                {loans.map((loan, index) => {
                    return(
                        <div key={index} className="row border border-3">
                            <div className='col-1'>
                                <img src={loan.book.thumbnail} height={125}/>
                            </div>
                            <div  className='col-4 mt-5'>
                                <p><span style={{fontWeight: "bold"}}> Book:</span> {loan.book.title}</p>
                            </div>
                            <div  className='col-3 mt-5'>
                                <p><span style={{fontWeight: "bold"}}>Date Checked out:</span> {loan.loanDateOut}</p>
                            </div>
                            <div className='col-3 mt-5'>
                                <p><span style={{fontWeight: "bold"}}>Due Date: </span>{loan.loanDateIn}</p>
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