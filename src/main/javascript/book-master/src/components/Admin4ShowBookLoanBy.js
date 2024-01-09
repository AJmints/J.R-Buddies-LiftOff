const Admin4ShowBookLoanBy = (props) => {
    const bookLoansUsers = props.bookLoansUsers
    

    const insertUser = bookLoansUsers.map((loan)=>{
    
        return(
            <tr key={loan.id}>   
                <td>{loan.user.id}</td>
                <td>{loan.user.firstName}</td>
                <td>{loan.user.lastName}</td>
                <td>{loan.loanDateOut}</td>
                <td>{loan.loanDateIn}</td>
                
        
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