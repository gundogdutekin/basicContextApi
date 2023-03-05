import React from 'react';

const AuthContext = React.createContext({status: false,panel:'', login: () => {}});

export default AuthContext;