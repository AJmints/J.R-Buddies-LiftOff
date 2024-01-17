import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

const Admin5UserUpdates = (props) => {
    const location = useLocation()
    const { user } = location.state
    const navigate = useNavigate();
    const roles = props.roles;
   

    const [editForm, setEditForm] = useState(user)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
      }
      const handleSubmit = event => {
        event.preventDefault()
        props.updateUser(editForm, user.id)
        navigate("/admin_home/users")
        window.location.reload(false)
        
      }
      console.log(user)

    return (
        <div className="user">
            <form onSubmit={handleSubmit}>
                <br></br>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">User name: </label>
                <div className="col-sm-10 w-50">
                    <input
                        type="text"
                        value={editForm.firstName}
                        name="firstName"
                        placeholder="firstName"
                        onChange={handleChange}
                        /> 
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">User Lastname: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.lastName}
                    name="lastName"
                    placeholder="lastName"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">User email: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">User address: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.address}
                    name="address"
                    placeholder="address"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">User Phone </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.phone}
                    name="phone"
                    placeholder="phone"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Role </label>
                <div className="col-sm-10 w-50">
                    <select type="text" name="role" id="role" value={editForm.role[0].role} onChange={handleChange}>
                    {roles.map(role=> (<option>{role.role}</option>))}
                    </select>
        
                </div>
            </div>
                <input type="submit" className="btn btn-primary" value="Update user" />
            </form>

        </div>
    );



}
export default Admin5UserUpdates;