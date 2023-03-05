import {useContext} from 'react';
import AuthContext from '../context/auth-context';


function Auth() {
    const {status,login}= useContext(AuthContext);
    
    return ( 
        <div>
            <h1>Giriş Ekranı</h1>
            <div>{status ? 'Giriş yaptınız':'Lütfen Giriş Yapınız'}</div>
            <button className={status ? 'danger':'success'} onClick={login} >{status ? 'Çıkış  Yap':'Giriş Yap'}</button>
        </div>
     );
}

export default Auth;