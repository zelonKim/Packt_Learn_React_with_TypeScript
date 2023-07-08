/* import { User } from "./api/authenticate";

type Props = {
    user: undefined | User;
    onSignInClick: () => void;
    loading: boolean;
}

export function Header({ user, onSignInClick, loading}: Props) {
    return(
        <header>
            {user ? (
                <span>
                    {user.name} has signed in
                </span>
            ): (
                <button onClick={onSignInClick} disabled={loading}>
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )
} */


////////////////


import { authenticate } from "./api/authenticate";
import { authorize } from "./api/authorize";
import { useAppContext } from "./AppContext";
import { Main } from "./Main";


export function Header() {
    const {user, loading, dispatch} = useAppContext();
    
        async function handleSignInClick() {
          dispatch({ type: "authenticate" })
          const authenticatedUser = await authenticate();
        
          dispatch({
            type: "authenticated",
            user: authenticatedUser,
          })
      
          if (authenticatedUser !== undefined) {
            dispatch({ type: "authorize" });
            const authorizedPermissions = await authorize( authenticatedUser.id )
        
            dispatch({
              type: "authorized",
              permissions: authorizedPermissions
            })
          }
        }
        

    return(
        <header>
            {user ? (
                <span>
                    {user.name} has signed in
                </span>
            ): (
                <button onClick={handleSignInClick} disabled={loading}>
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )
}