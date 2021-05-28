
import { Route } from 'react-router';
import './App.css';
import Home from './Components/home';
import MyCard from './Components/mycard';
import RegisterForm from './Components/registerform';

function App() {
  return (
    <div >
      <Route  exact path="/" render={() => <RegisterForm />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/mycard" render={() => <MyCard/>} />
    </div>
  );
}

export default App;
