
import 'App.css';
import Login from 'components/Login';
import Productos from 'components/Productos';
import Users from 'components/Users';
import Ventas from 'components/Ventas';
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
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/Productos'>
            <Productos/>
          </Route>
          <Route path='/Users'>
            <Users/>
          </Route>  
          <Route path='/Ventas'>
            <Ventas/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
