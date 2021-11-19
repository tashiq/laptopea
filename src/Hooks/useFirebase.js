import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initAuthentication from '../Pages/Login/Firebase/Firebase.init';


initAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const registerUser = (email, pass, name, navigate, phone) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setUser(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        const newUser = { name, email, phone };
                        fetch('http://localhost:4000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                        //update name
                        setError('');
                        alert('New User Created');
                        navigate('/home')

                    }).catch((error) => {
                        setError(error.message)
                    });
            })
            .catch((error) => {
                setError(error.message);
            })
        setIsLoading(false)
    }
    const signIn = (email, password, navigate, location) => {
        setIsLoading(true);
        const destination = location?.state?.from || '/home';
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                navigate(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
        setIsLoading(false);

    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch(err => setError(err.message))
        setIsLoading(false)
    }
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        setIsLoading(false)
    }, [])
    return {
        user, error, isLoading,
        registerUser, signIn, logOut
    };
};

export default useFirebase;