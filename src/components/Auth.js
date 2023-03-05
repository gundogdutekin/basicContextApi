import {useContext} from 'react';
import AuthContext from '../context/auth-context';


function Auth() {
    const {status,panel,login}= useContext(AuthContext);
    
    return ( 
        <div>
            <h1>{panel}</h1>
            <div>{status ? 'Giriş yaptınız':'Lütfen Giriş Yapınız'}</div>
            <button className={status ? 'danger':'success'} onClick={login} >{status ? 'Çıkış  Yap':'Giriş Yap'}</button>
        </div>
     );
}

export default Auth;