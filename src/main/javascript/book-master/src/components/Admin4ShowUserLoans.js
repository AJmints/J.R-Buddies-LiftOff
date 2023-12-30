const Admin4ShowUserLoans = (props) => {
    const userLoansBooks = props.userLoansBooks
    const loansId = props.loansId

    const insertBooks = userLoansBooks.map((book)=>{
       
        var mainLoan = 0
        for (const loan of book.loans){
           for (const id of loansId){
            if (loan.id == id){
             mainLoan = loan
            }
           }
        }
        return(
            <tr key={book.id}>   
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{mainLoan.loanDateOut}</td>
                <td>{mainLoan.loanDateIn}</td>
        
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