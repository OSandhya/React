import React, { Component } from "react";
import axios from 'axios';
 class AdminForm extends React.Component {
     state={
         admin:{
            adminName :"",
            adminPassword:" ",

         },
     };
     handleChange = (event) => {
        const admin = { ...this.state.admin }; // copying student object
        admin[event.target.name] = event.target.value; // student[fullName] = "ab"
        //student.fullName = "ab";
        //student[fullName]="ab";
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ admin:admin });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        axios
          .post("http://localhost:8080/api/admindetails", this.state.admin)
          .then((res) => {
            this.props.history.push("/admin");
          })
          .catch((err) => console.log(err));
      };
     render() { 
         return (
         <div> 
         <h3>Register Form</h3>
         <form className="w-50 mx-auto border p-3">
           <div className="mb-3">
             <label for="exampleInputName" className="form-label">
               Fullname
             </label>
             <input type="text" className="form-control" id="exampleInputName" />
           </div>
          
          
           <div className="mb-3">
             <label for="exampleInputPassword1" className="form-label">
               Password
             </label>
             <input
               type="password"
               className="form-control"
               id="exampleInputPassword1"
             />
           </div>
           <select
             className="form-select mb-3"
             aria-label="Default select example"
           >
             <option selected>Select Role</option>
             <option value="1">User</option>
             <option value="2">Admin</option>
           </select>
           <div class="d-grid gap-2">
             <button type="submit" class="btn btn-primary">
               Submit
             </button>
           </div>
         </form>
       </div>
     );
   }
 }
    
  
 export default AdminForm;