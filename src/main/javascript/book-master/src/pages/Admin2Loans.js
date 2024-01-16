import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Admin2loans =(props)=>{
    const loansToDisplay = props.loans
 
          const [loans, setLoans] = useState(loansToDisplay)
          const [loanDateOut, setLoanDateOut] = useState([])
          
            
          useEffect(() => {setLoans(loansToDisplay)}, [loansToDisplay]);

          const handleChange = event => {
            setLoanDateOut(event.target.value )
          }

          const handleSubmit = event => {
            event.preventDefault()
            filterLoansByDate(loanDateOut)
            setLoanDateOut([])
          }

          const filterLoansByDate = (loanDateOut) =>{

            let date = new Date(loanDateOut)
            date.setDate(date.getDate()+1)
            let date1 = date.getTime()
            
            const searchLoans = loans.filter((item)=>{
              
              let date = new Date(item.loan.loanDateOut)
              date.setDate(date.getDate()+1)
              let date2 = date.getTime()
              
              return date1 === date2
            })
            setLoans(searchLoans)
          }

          const displayed = loans.map((loan)=>{
          
              

            return (
                <tr key= {loan.loan.id}>
                    <td>
                    <Link  to={`/admin_home/users/${loan.user.id}`}>{loan.user.id}</Link>
                    </td>
                    <td>
                    <Link  to={`/admin_home/books/${loan.book.id}`}>{loan.book.id}</Link>
                    </td>
                    <td>
                       {loan.loan.loanDateOut}
                    </td>
                    <td>
                        {loan.loan.loanDateIn?loan.loan.loanDateIn : "No Returned" }
                    </td>
                </tr>
            )
          })
      
    return (
      <>
        <br></br>
        <div className="container mt-3">
            <form onSubmit={handleSubmit} className="row g-2 align-items-center">
                     <div className="col-auto">
                          <input
                            type="date"
                            id="status"
                            value={loanDateOut}
                            name="status"
                            className="form-control"
                            placeholder="loan's status"
                            onChange={handleChange}
                          />
                      </div>
                      <div className="col-auto">
                          <button type="submit"  className="btn btn-primary">filter Loans</button>
                      </div>
            </form>
        </div>
       <div className="container">
            <br></br>
            <h2>Loans History</h2>
            <br></br>
                {
                  displayed.length === 0? <h2>No loans to show</h2> 
                                                    :
                                          <table className="table table-striped">
                                              <thead className="thead-dark">
                                                <tr>
                                                  <th scope="col">User's id</th>
                                                  <th scope="col">Book's id</th>
                                                  <th scope="col">Loan's date</th>
                                                  <th scope="col">returning date</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {displayed}
                                              </tbody>
                                          </table>
                }
        </div> 
        </>
        
      );
}

export default Admin2loans