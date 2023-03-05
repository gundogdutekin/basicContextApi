import './App.css';
import AuthContext from './context/auth-context';
import Auth from './components/Auth';
import {useState} from 'react';

function App() {
  const [autstatus, setAutstatus] = useState(false)
  const [autPanel, setAutPanel] = useState('Giriş Ekranı')
  const loginHandler = () => {
    if(autstatus===true) 
    {
      setAutstatus(false)
      setAutPanel('Giriş Ekranı')
    }else{
      setAutstatus(true)
      setAutPanel('Admin Panel')
    }
  } 
  return (
    <div className="App">
      <AuthContext.Provider value={{status: autstatus,panel:autPanel, login: loginHandler}}>
        <Auth />
      </AuthContext.Provider> 
    </div>
  );
}

export default App;
