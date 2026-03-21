import Authcontext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,updateProfile, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/Firebase.intit';
import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true) 

    const googleProvider = new GoogleAuthProvider();

    // Register
    const registerUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login
    const loginUser = (email,password)=>{
        setLoading(true)       
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Google Login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Log Out
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update Profile
    const updateUserProfile = ( profile) => {
        return updateProfile(auth.currentUser,profile);
      }

    const authInfo = {
        logoutUser,
        updateUserProfile,
        loading,
        user,
        registerUser,
        loginUser,
        googleLogin
    }

    // observation
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    return (
        <Authcontext value={authInfo}  >
            {children}
        </Authcontext>
    );
};

export default AuthProvider;