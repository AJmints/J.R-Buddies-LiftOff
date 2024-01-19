const Admin4ShowUserLoans = (props) => {
    const userLoansBooks = props.userLoansBooks
    

    const insertBooks = userLoansBooks.map((loan)=>{
       
       
        return(
            <tr key={loan.id}>   
            <td>{loan.book.id}</td>
            <td>{loan.book.title}</td>
            <td>{loan.book.author}</td>
            <td>{loan.loanDateOut.slice(5,10)}-{loan.loanDateOut.slice(0,4)}</td>
            <td>{loan.loanDateIn?loan.loanDateIn.slice(5,10)+"-"+loan.loanDateIn.slice(0,4) : "No Returned" }</td>
        
          </tr>
      )
     })
 return (
        <tbody>
                {insertBooks}
        </tbody>
    );
};
export default Admin4ShowUserLoans;