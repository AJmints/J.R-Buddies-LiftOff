import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Admin2Users = (props) => {
  const usersToDisplay = props.users
  
          const [users, setUsers] = useState(usersToDisplay)
          const [email, setEmail] = useState([])
          
          useEffect(() => {setUsers(usersToDisplay)}, [usersToDisplay]);


          const handleChange = event => {
            setEmail(event.target.value )
          }

          const handleSubmit = event => {
            event.preventDefault()
            filterUsersByEmail(email)
            setEmail([])
          }

          const filterUsersByEmail = (email) =>{
            const searchUsers = users.filter((item)=>{
              return item.email.includes(email) 
            })
            setUsers(searchUsers)
          }

          const displayed = users.map((user)=>{
            return (
                <tr key= {user.id}>
                    <td>
                        <Link to={`/admin_home/users/${user.id}`}>{user.firstName}</Link>
                    </td>
                    <td>
                        <Link to={`/admin_home/users/${user.id}`}>{user.lastName}</Link>
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
                            id="email"
                            value={email}
                            name="email"
                            className="form-control"
                            placeholder="email"
                            onChange={handleChange}
                          />
                      </div>
                      <div className="col-auto">
                          <button type="submit" value="Search" className="btn btn-primary mb-2">Search </button>
                      </div>
            </form>
        </div>
       <div>
            <br></br>
            <h2>List of Users:</h2>
            <br></br>
                {
                  displayed.length === 0? <h2>No users to show</h2> 
                                                    :
                                          <table className="table table-striped">
                                              <thead className="thead-dark">
                                                <tr>
                                                  <th scope="col">Name</th>
                                                  <th scope="col">lastname</th>
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
};

export default Admin2Users;
