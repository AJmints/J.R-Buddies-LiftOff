const Admin4ShowBookLoanBy = (props) => {
    const bookLoansUsers = props.bookLoansUsers
    

    const insertUser = bookLoansUsers.map((loan)=>{
    
        return(
            <tr key={loan.id}>   
                <td>{loan.user.id}</td>
                <td>{loan.user.firstName}</td>
                <td>{loan.user.lastName}</td>
                <td>{loan.loanDateOut.slice(5,10)}-{loan.loanDateOut.slice(0,4)}</td>
                <td>{loan.loanDateIn.slice(5,10)}-{loan.loanDateIn.slice(0,4)}</td>
                
        
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