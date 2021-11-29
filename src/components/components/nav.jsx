import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
const Nav = () => {
  //const classes = useStyles();
 
  const login = useSelector((state) => state.login);

  console.log(login);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              border: "3px solid red",
              padding: "5px",
            }}
          >
            MyApp
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/users">
            Users
          </Button>
          
          {login.loggedIn ? (
            <Button color="inherit" component={NavLink} to="/logout">
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
          )}
          <Button color="inherit" component={NavLink} to="/register">
            Register
          </Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
