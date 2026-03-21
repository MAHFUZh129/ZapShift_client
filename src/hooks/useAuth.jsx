import React, { use } from 'react';
import Authcontext from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(Authcontext)
    return authInfo
        
};

export default useAuth;