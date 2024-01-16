import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Admin4ShowUserLoans from "../components/Admin4ShowUserLoans";
import axios from "axios";
import { Link } from "react-router-dom"

const Admin3UserInfo = (props) => {

    const [userLoansBooks, setUserLoanBooks]= useState([]);
    const URL3 = "http://localhost:8080/api/user/loan/"
    
    const { id } = useParams()
    const users = props.users
    const user = users.find(p => p.id === parseInt(id))
    const navigate = useNavigate();
    
    const removeUser = ()=>{
        props.deleteUser(user.id)
        navigate("/admin_home/users")
    }

    const getUserLoansBooks = async (id) => {
        try {
          const response = await axios.get(URL3 + id);
          setUserLoanBooks(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        getUserLoansBooks(id);
      }, [id]);
   
   

    return (<div className="container mt-5">
        <div className="form-group row" key= {user.id}>
            <Link to={`/admin_home/users/edit/${user.id}`}  state={{ user }}><button className="btn btn-primary">edit information</button></Link>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Id: </label> 
                <label className="col-sm-2 col-form-label"> {user.id} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> FirstName:  </label> 
                <label className="col-sm-2 col-form-label"> {user.firstName} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">LastName: </label> 
                <label className="col-sm-2 col-form-label"> {user.lastName} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Phone number:  </label> 
                <label className="col-sm-2 col-form-label">{user.phone} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Email: </label> 
                <label className="col-sm-2 col-form-label"> {user.email} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Address: </label> 
                <label className="col-sm-2 col-form-label"> {user.address} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Role: </label> 
                <label className="col-sm-2 col-form-label"> {user.role[0].role} </label> 
            </div>
    
            <div className="form-group row">
                <h2 className="col-sm-2 col-form-label"> Loans: </h2> 
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>Author</th>
                            <th>Date loan out</th>
                            <th>Date returned</th>
                        </tr>
                        </thead>
                  
                            <Admin4ShowUserLoans  userLoansBooks={userLoansBooks}  />  
                         
                </table>
            </div>
            
            <button id="delete" onClick={removeUser} className="btn btn-danger">Delete User</button>
            
        </div>
    </div>
    )
};

export default Admin3UserInfo;