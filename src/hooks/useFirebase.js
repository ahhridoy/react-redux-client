import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initialAuthentication from "../firebase/firebase.init";

// initialize firebase
initialAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const signInWithGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // const destination = location?.state?.from || "/";
                // history.replace(destination);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // observe user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    const logOut = (history) => {
        signOut(auth)
            .then(() => {
                // history.replace("/");
                setError("");
            })
            .catch((error) => {
                setError(error);
            });
    };

    return {
        user,
        signInWithGoogle,
        logOut,
        error,
    };
};

export default useFirebase;
