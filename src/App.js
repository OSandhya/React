import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Posts from "./components/posts"
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';
import Bookissued from "./components/bookissued";
import Admin from './components/admin';
import AdminForm from './components/adminform';
import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import BookIssuedForm from './components/bookissuedform';
import UpdateIssue from './components/updateIssue';
import Author from './components/author';
import AddIssuedBook from './components/addissuedbook';
import AuthorForm from './components/authorform';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/bookissued" component={Bookissued}/>
        <Route path="/admin"  component={Admin}/>
        <Route path="/admins/add" component={AdminForm}/>
        <Route path="/author" component={Author} />
        <Route path="/authors/add" component={AuthorForm} />
        <Route path="/authors/update:authorId" component={AuthorForm} /> 
        <Route path="/register" component={Register} />
        <Route exact path="/bookissuedform" component={BookIssuedForm} />
        <Route path="/addissuedbook/add" component={AddIssuedBook} />
        <Route path="/bookissuedform" component={BookIssuedForm} />
        <Route path="/updateIssue" component={UpdateIssue}></Route>
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;