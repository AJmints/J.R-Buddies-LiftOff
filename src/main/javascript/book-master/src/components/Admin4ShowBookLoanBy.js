const Admin4ShowBookLoanBy = (props) => {
    const bookLoansUsers = props.bookLoansUsers
    const loansId = props.loansId
    
   

    const insertUser = bookLoansUsers.map((user)=>{
    
        var mainLoan = 0
        for (const loan of user.loans){
           for (const id of loansId){
            if (loan.id == id){
             mainLoan = loan
            }
           }
        }
        return(
            <tr key={user.id}>   
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{mainLoan.loanDateOut}</td>
                <td>{mainLoan.loanDateIn}</td>
        
          </tr>
      )
     })
 return (
        <tbody>
                {insertUser}
        </tbody>
    );
};
export default Admin4ShowBookLoanBy;