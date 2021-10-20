
import 'App.css';
import Login from 'pages/Login';
import Productos from 'pages/Productos';
import Users from 'pages/Users';
import Ventas from 'pages/Ventas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login/>
          </Route>
          <Route path='/Productos' exact>
            <Productos/>
          </Route>
          <Route path='/Users' exact>
            <Users/>
          </Route>  
          <Route path='/Ventas' exact>
            <Ventas/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
