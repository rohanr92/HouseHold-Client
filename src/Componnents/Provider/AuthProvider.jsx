import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    let [loading, setLoading] = useState(true)


    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));

    }

    const forgotPass = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
            .finally(() => setLoading(false));
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }

    const updatedProfile = (name, imageURL, user = auth.currentUser) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: imageURL
        });
    };

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login,
        googleLogin,
        forgotPass,
        updatedProfile,
        loading,
    }


    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;