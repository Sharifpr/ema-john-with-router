import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthenticaton from "../firebase/firebase.init";

initializeAuthenticaton();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [auth]);


    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;