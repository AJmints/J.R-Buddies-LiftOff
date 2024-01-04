const Admin4ShowUserLoans = (props) => {
    const userLoansBooks = props.userLoansBooks
    

    const insertBooks = userLoansBooks.map((loan)=>{
       
       
        return(
            <tr key={loan.id}>   
            <td>{loan.book.id}</td>
            <td>{loan.book.title}</td>
            <td>{loan.book.author}</td>
            <td>{loan.loanDateOut}</td>
            <td>{loan.loanDateIn}</td>
        
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