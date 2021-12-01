import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import Joi from "joi-browser";
import Alert from "@mui/material/Alert";
const ariaLabel = { "aria-label": "description" };

const Register = (props) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname:"",
    contactNo:"",
    email:"",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname:"",
    contactNo:"",
    email:"",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const schema = {
    firstname: Joi.string().required(),
    lastname:Joi.string().required(),
    contactNo:Joi.number().required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
    password: Joi.string().min(3).required(),
    
  };

  // Step2: Validate schema with user input
  const validate = () => {
    const errors = {};
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Capture user input and update state object
  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    //this.setState({ user: user });
    setUser(usr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit");

    //const errors = validate();
    //console.log(errors);
    setErrors(validate());
    console.log(errors);
    if (errors) return;
    axios
      .post("http://localhost:8080/Register", user)
      .then((res) => props.history.push("/home"))
      .catch((err) => {
        console.log(err.response.data.message);
        setErrMsg(err.response.data.message);
      });
  };
  return (
    <div>
      <Typography variant="h3">Register Page</Typography>
      <Grid container>
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {errMsg && <Alert severity="error">{errMsg}</Alert>}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              border: "1px solid blue",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="firstname"
                value={user.firstname}
                name="firstname"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.firstname}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="lastname"
                value={user.firstname}
                name="lastname"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.lastname}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="number"
                variant="outlined"
                fullWidth
                label="contactNo"
                value={user.contactNo}
                name="contactNo"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.contactNo}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="email"
                variant="outlined"
                fullWidth
                label="Email"
                value={user.email}
                name="email"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.email}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="password"
                fullWidth
                variant="outlined"
                label="Password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.password}</Typography>
              )}
            </Box>

            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                Register
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
