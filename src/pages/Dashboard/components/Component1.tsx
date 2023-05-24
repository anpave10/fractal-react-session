import { useContext } from "react";
import { DashboardContext } from "../../../context/DashboardContext";
// interface Component1Props {
//     value: string
// }
export const Compoennt1 = () => {
    const value = useContext(DashboardContext)
    return (<div>`Component 1 {value}`</div>)
}