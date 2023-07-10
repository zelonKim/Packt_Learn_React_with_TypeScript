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

/* export function Header() {

    const { user, loading, dispatch } = useAppContext();

    

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

} */


////////////////////

import { useDispatch, useSelector } from "react-redux/es/exports";
import { authenticate } from "./api/authenticate";
import { authorize } from "./api/authorize";
import { useAppContext } from "./AppContext";
import { Main } from "./Main";
import { RootState } from "./store/store";
import { authenticateAction, authenticatedAction, authorizedAction } from "./store/userSlice";

export function Header() {

    const user = useSelector(
        (state: RootState) => state.user.user
    )
    const loading = useSelector(
        (state: RootState) => state.user.loading
    )

    const dispatch = useDispatch();

        async function handleSignInClick() {
          dispatch(authenticateAction())
          const authenticatedUser = await authenticate();
        
          dispatch(authenticatedAction(authenticatedUser))
          const authorizedPermissions = await authorize(
            authenticatedUser.id
          )
          dispatch(authorizedAction(authorizedPermissions))
            }
          }
