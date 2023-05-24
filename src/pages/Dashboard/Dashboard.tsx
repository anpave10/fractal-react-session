import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../context/DashboardContext";
import { Compoennt1 } from "./components/Component1"
import { Compoennt2 } from "./components/Component2"
import { useState, createContext } from "react"
import { AppStore } from "../../models/store";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { resetUser } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export const Dashboard = () => {
    const [value, setValue] = useState("Dashboard value");

    const { email } = useSelector((state: AppStore) => state.user)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth)
            dispatch(resetUser())
            navigate("/")
        } catch (error) {
            if (error instanceof FirebaseError) {
                alert(error.message)
            } else {
                alert("Unknown error: " + error)
            }
        }
    }


    return (<div>
        <h1>Dashboard component</h1>
        {
            email && <h2> Hello {email} </h2>
        }

        <DashboardContext.Provider value={value}>
            <Compoennt1 />
            <Compoennt2 />
        </DashboardContext.Provider>

        <button onClick={logOut}>Log out</button>

    </div>)
}