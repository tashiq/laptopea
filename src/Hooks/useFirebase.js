import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initAuthentication from '../Pages/Login/Firebase/Firebase.init';


initAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const registerUser = (email, pass) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(setIsLoading(false))
    }
    return {
        user, error, isLoading,
        registerUser
    };
};

export default useFirebase;