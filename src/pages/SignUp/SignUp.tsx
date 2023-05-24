import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { FirebaseError } from "firebase/app";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
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
