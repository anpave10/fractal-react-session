import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../context/DashboardContext";
import { Compoennt1 } from "./components/Component1"
import { Compoennt2 } from "./components/Component2"
import { useState, createContext, useEffect } from "react"
import { AppStore } from "../../models/store";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { resetUser } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { getProductsAPI } from "../../api/product";
import { Product } from "../../models/productSlice";

export const Dashboard = () => {
    const [value, setValue] = useState("Dashboard value");
    const [products, setProducts] = useState([])

    const { firstName, lastName } = useSelector((state: AppStore) => state.user)

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

    useEffect(() => {
        getProductsAPI().then(
            response => {
                setProducts(response?.data.products)
            }
        )
    }, [])


    return (<div>
        <h1>Dashboard component</h1>
        {
            firstName && lastName && <h2> Hello {firstName + " " + lastName} </h2>
        }

        {/* <DashboardContext.Provider value={value}>
            <Compoennt1 />
            <Compoennt2 />
        </DashboardContext.Provider> */}

        {
            products.length > 0 && products.map((product: Product) => {
                return <label key={product.id}>{product.title}</label>
            })
        }

        <button onClick={logOut}>Log out</button>

    </div>)
}