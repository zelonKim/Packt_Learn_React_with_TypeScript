/* import { useReducer } from 'react'
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';
import { Header } from './Header';
import { Main } from './Main';

type State = {
  user: undefined | User,
  permissions: undefined | string[],
  loading: boolean,
}

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
}



type Action = {
  type: "authenticate",
  } |
  { type: "authenticated",
    user: User | undefined 
  } |
  { type: "authorize" 
    } | 
  { type: "authorized",
    permissions: string[]
  }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "authenticate":
      return { ...state, loading: true }

    case "authenticated":
      return { ...state, loading: false, user: action.user }

    case "authorize":
      return {...state, loading: true }

    case "authorized":
      return { ...state, loading: false, permissions: action.permissions,}

  default:
    return state;
  }
}



function App() {
  const [{ user, permissions, loading }, dispatch ] = useReducer(reducer, initialState);

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
  
  return (
    <div>
      <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
      <Main user={user} permissions={permissions} />
    </div>
  );
}

export default App;

 */

/////////////////////////

import { Provider } from 'react-redux';
import { store } from './store/store'
import { useReducer } from 'react'
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';
import { Header } from './Header';
import { Main } from './Main';

type State = {
  user: undefined | User,
  permissions: undefined | string[],
  loading: boolean,
}

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
}


type Action = {
  type: "authenticate",
  } |
  { type: "authenticated",
    user: User | undefined 
  } |
  { type: "authorize" 
    } | 
  { type: "authorized",
    permissions: string[]
  }


function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "authenticate":
      return { ...state, loading: true }

    case "authenticated":
      return { ...state, loading: false, user: action.user }

    case "authorize":
      return {...state, loading: true }

    case "authorized":
      return { ...state, loading: false, permissions: action.permissions,}

  default:
    return state;
  }
}


function App() {
  const [{ user, permissions, loading }, dispatch ] = useReducer(reducer, initialState);

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
  
  return (
    <div>
      <Provider store={store}>
          <Header />
          <Main />
      </Provider>
    </div>
  );
}

export default App;
