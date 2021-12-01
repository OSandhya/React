import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import Input from "@mui/material/Input";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// importing with the help of destructring
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

const Admin = (props) => {
  const [user, setUser] = useState({
    adminName: "",
    adminPassword: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    adminName: "",
    adminPassword: "",
    role: "",
  });
  const [errMsg, setErrMsg] = useState("");

  // Step1 : Define schema object
  const schema = {
    adminName: Joi.string().required(),
    password: Joi.string().min(3).required(),
    role: Joi.string().required(),
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
      .post("http://localhost:8080/api/admindetails", user)
      .then((res) => props.history.push("/admin"))
      .catch((err) => {
        console.log(err.response.data.message);
        setErrMsg(err.response.data.message);
      });
  };
  return (
    <div>
      <Typography variant="h3">Admin Page</Typography>
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
                label="AdminName"
                value={user.adminName}
                name="adminName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.adminName}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="password"
                variant="outlined"
                fullWidth
                label="AdminPassword"
                value={user.adminPassword}
                name="adminPassword"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.adminPassword}</Typography>
              )}
            </Box>

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                name="role"
                value={user.role}
                label="Role"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="reader">Reader</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
            {errors && <Typography variant="caption">{errors.role}</Typography>}
            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;