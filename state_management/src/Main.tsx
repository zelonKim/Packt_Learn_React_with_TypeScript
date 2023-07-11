/* import { User } from "./api/authenticate"
import { useAppContext } from "./AppContext";
import { Content } from "./Content";


type Props ={
    user: undefined | User;
    permissions: undefined | string[];
}

export function Main() {
    const { user } = useAppContext();

    return(
        <main>
            <h1>Welcome</h1>
            <p>{user ? `Hello ${user.name}` : "Plz sign in"}</p>
            <Content />
        </main>
    )
} */

/////////////////


import { useSelector } from "react-redux/es/exports";
import { Content } from "./Content";
import { RootState } from "./store/store";

export function Main() {
    const user = useSelector(
        (state: RootState) => state.user.user
    )
    
    return(
        <main>
            <h1>Welcome</h1>
            <p>{user ? `Hello ${user.name}` : "Plz sign in"}</p>
            <Content />
        </main>
    )
}