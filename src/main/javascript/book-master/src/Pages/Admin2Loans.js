import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Admin2loans =(props)=>{
    const loansToDisplay = props.loans
 
          const [loans, setLoans] = useState(loansToDisplay)
          const [status, setStatus] = useState([])
          
            
          useEffect(() => {setLoans(loansToDisplay)}, [loansToDisplay]);

          const handleChange = event => {
            setStatus(event.target.value )
          }

          const handleSubmit = event => {
            event.preventDefault()
            filterLoansByStatus(status)
            setStatus([])
          }

          const filterLoansByStatus = (status) =>{
            const searchLoans = loans.filter((item)=>{
              return item.status.includes(status) 
            })
            setLoans(searchLoans)
          }

          const displayed = loans.map((loan)=>{
            console.log(loan)
            return (
                <tr key= {loan.loan.id}>
                    <td>
                    <Link  to={`/admin_home/loans/${loan.id}`}>{loan.user.id}</Link>
                    </td>
                    <td>
                    <Link  to={`/admin_home/loans/${loan.id}`}>{loan.book.id}</Link>
                    </td>
                    <td>
                        <Link  to={`/admin_home/loans/${loan.id}`}>{loan.loan.loanDateOut}</Link>
                    </td>
                    <td>
                        <Link to={`/admin_home/books/${loan.id}`}>{loan.loan.loanDateIn}</Link>
                    </td>
                </tr>
            )
          })
      
    return (
      <>
        <br></br>
        <div>
            <form onSubmit={handleSubmit} className="row g-2 align-items-center">
                     <div className="col-auto">
                          <input
                            type="text"
                            id="status"
                            value={status}
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
       <div>
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