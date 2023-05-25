import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth, database } from "../../firebase/firebase.config";
import { FirebaseError } from "firebase/app";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user.slice";
import { get, ref } from "firebase/database";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);

            if (response) {
                const userRef = ref(database, `users/${response.user.uid}`)

                const snapshot = await get(userRef)
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    console.log("userDate", userData)
                    const { firstName, lastName } = userData;
                    dispatch(setUser({
                        email: response.user.email,
                        id: response.user.uid,
                        accessToken: "",
                        firstName: firstName,
                        lastName: lastName
                    }))
                }
            }
            setError("");
            setEmail("");
            setPassword("");
            navigate("/dashboard")
            console.log("response", response)
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError(error.message)
            } else {
                setError("Unknown error: " + error);
            }
        }

    }

    return (<div>
        <h1>Sign in</h1>
        <form onSubmit={handleSignIn}>
            <label>Email: </label>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <label>Password: </label>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            {
                error && <label style={{ color: "red" }}>{error}</label>
            }
            <br></br>
            <button type="submit">Sign in</button>
        </form>
        <div>
            <h4> Not a member yet? <button onClick={() => navigate("/sign-up")}>Sign up</button> </h4>
        </div>
    </div>)
}