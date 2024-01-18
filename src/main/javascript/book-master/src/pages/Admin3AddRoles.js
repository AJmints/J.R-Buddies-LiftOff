import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Admin3AddRoles = (props)=>{

    const navigate = useNavigate();
    const [editForm, setEditForm] = useState([])

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
      }
      const handleSubmit = event => {
        event.preventDefault()
        props.saveRole(editForm)
        navigate("/admin_home/roles")
        window.location.reload(true)
      }
      
    return (
        <div className="role">
            <form onSubmit={handleSubmit}>
                <br></br>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Role's name: </label>
                <div className="col-sm-10 w-50">
                    <input
                        type="text"
                        value={editForm.role}
                        name="role"
                        placeholder="roles's name"
                        onChange={handleChange}
                        /> 
                </div>
            </div>
                <input type="submit" className="btn btn-primary" value="Save role" />
            </form>

        </div>
    );
  } 
  
  export default Admin3AddRoles;