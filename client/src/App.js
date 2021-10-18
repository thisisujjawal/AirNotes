import './App.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import { useState } from 'react';

function App() {
  const[alert, setAlert] = useState(null);
  return (
    <BrowserRouter>
      <Navbar alert={alert} setAlert={setAlert}/>
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/about' exact component={About} />
        <Route path='/signup' exact component={()=> <SignUp setAlert={setAlert}/>} />
        <Route path='/login' exact component={()=> <Login setAlert={setAlert}/>} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
