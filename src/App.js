import './App.css';
import AuthContext from './context/auth-context';
import Auth from './components/Auth';
import {useState} from 'react';

function App() {
  const [autstatus, setAutstatus] = useState(false)
  const loginHandler = () => {
    autstatus===true ? setAutstatus(false) :setAutstatus(true)
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{status: autstatus, login: loginHandler}}>
        <Auth />
      </AuthContext.Provider> 
    </div>
  );
}

export default App;
