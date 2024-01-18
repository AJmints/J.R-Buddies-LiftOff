import { Link, useNavigate } from "react-router-dom"

const Admin2Roles =(props)=>{
    const navigate = useNavigate();
    const rolesToDisplay = props.roles
    

console.log(rolesToDisplay)

          const displayed = rolesToDisplay.map((role)=>{
            const removeRole = () => {
                props.deleteRole(role.id)
                window.location.reload(false)
                navigate("/admin_home/roles")
        
              }
            return (
                <tr key= {role.id}>
                    <td>
                    {role.id}
                    </td>
                    <td>
                    {role.role}
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick={removeRole}>Delete role</button>
                    </td>
                </tr>
            )
          })

          return(
            <>
                    <div className="container">
                        <br></br>
                        <div className="col-auto">
                        <Link to="/admin_home/roles/save"><button className="btn btn-success">Add a Role</button></Link>
                          
                      </div>
                      <br></br>
                        <h2>All Roles</h2>
                        <br></br>
                            {
                            displayed.length === 0? <h2>No roles to show</h2> 
                                                                :
                                                    <table className="table table-striped">
                                                        <thead className="thead-dark">
                                                            <tr>
                                                            <th scope="col">Role's id</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {displayed}
                                                        </tbody>
                                                    </table>
                        }
                    </div> 
            </>

          )

}

export default Admin2Roles