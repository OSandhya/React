import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';
import Bookissued from "./components/bookissued";
import Admin from './components/admin';
import AdminForm from './components/adminform';
import { Route, Switch, Redirect } from "react-router-dom";
import UpdateAuthor from './components/updateauthor';
import "bootstrap/dist/css/bootstrap.css";
import BookIssuedForm from './components/bookissuedform';
import UpdateIssuedBook from './components/updateissuedbook';
import Author from './components/author';
import AuthorForm from './components/authorform';
import Publishers from './components/publisher';
import AddPublisher from './components/addpublisher';
import UpdatePublisher from './components/updatepublishers';
import Books from './components/books';
import BooksForm from './components/booksform';
import UpdateBooks from './components/updatebooks';
import BooksOrder from './components/booksorder';
import UpdateOrder from './components/updateorder';
import AddOrder from './components/addorder';
import DamagedBooks from './components/damagedbooks';
import AddDamagedBooks from './components/adddamagedbooks';
import UpdateDamaged from './components/updatedamaged';
import Readers from './components/readers';
import AddReaders from './components/addreaders';
import UpdateReaders from './components/updatereaders';
import Users from './components/users';
import AddUsers from './components/addusers';
import UpdateUsers from './components/updateusers';
import Logout from './components/logout';
import BooksReturn from './components/booksreturn';
import AddReturn from './components/addreturn';
import UpdateReturn from './components/updatereturn';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/login" component={Login} />
        <Route path="/admin"  component={Admin}/>
        <Route path="/admins/add" component={AdminForm}/>
        <Route path="/authors/add" component={AuthorForm} />
        <Route path="/authors/update/:authorId" component={UpdateAuthor} /> 
        <Route path="/author" component={Author} />
        <Route path="/publisher/add" component={AddPublisher}/>
        <Route path="/publishers/update/:id" component={UpdatePublisher}/>
        <Route path="/publisher" component={Publishers}/>
        <Route path="/register" component={Register} />
        <Route path="/book/add"  component={BooksForm} />
        <Route path="/books/update/:bookid" component={UpdateBooks} />
        <Route path="/book" component={Books} />
        <Route path="/bookissued" component={Bookissued}/>
        <Route path="/booksissued/add" component={BookIssuedForm} />  
       {/*  <Route path="/booksissued/update/:issueId" component={UpdateIssuedBook} />   */}
        <Route path="/booksreturn/add" component={AddReturn} />
        <Route path="/bookreturn/update/:id" component={UpdateReturn} />
        <Route path="/booksreturn" component={BooksReturn} />   
        <Route path="/booksorder/update/:orderId" component={UpdateOrder}/>
        <Route path="/api/viewOrderList/add" component={AddOrder} />
        <Route path="/booksorder" component={BooksOrder} />
        <Route path="/damagedbook/update/:id" component={UpdateDamaged}/>
        <Route path="/api/viewDamagedBooksList/add" component={AddDamagedBooks} />
        <Route path="/damagedbook" component={DamagedBooks} />
        <Route path="/readers/add" component={AddReaders} />
        <Route exact path="/readers/update/:id" component={UpdateReaders} />
        <Route path="/readers" component={Readers} />
        <Route path="/users/addusers" component={AddUsers}/>
        <Route path="/users/update/:userid" component={UpdateUsers}/>
        <Route path="/users" component={Users}/>
        <Route path="/logout" component={Logout} />
       
      </Switch>
    </div>
  );
}

export default App;