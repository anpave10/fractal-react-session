import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase/firebase.config";
import { FirebaseError } from "firebase/app";
import { ref, set } from "firebase/database";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                const userRef = ref(database, `users/${response.user.uid}`)
                set(userRef, {
                    email: response.user.email,
                    firstName: firstName,
                    lastName: lastName
                })
            }
            setError("")
            setEmail("");
            setPassword("");
            navigate("/")
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError(error.message)
            } else {
                setError("Unknown error: " + error);
            }
        }
    }

    return (<div>
        <h1>Sign up</h1>
        <form onSubmit={handleSignUp}>
            <label>Name: </label>
            <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} required />
            <br></br>
            <label>Last name: </label>
            <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} required />
            <br></br>
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
            <button type="submit">Sign up</button>
        </form>
        <div>
            <h4> Already have an account? <button onClick={() => navigate("/")}>Sign in</button> </h4>
        </div>
    </div>)
}
