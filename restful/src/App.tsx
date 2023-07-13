/* import { PostsPage } from './posts/PostPage';

function App() {
  return (
    <PostsPage />
  );
}
export default App; */

////////////////

/* import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getPosts } from "./posts/getPosts";
import { PostsPage } from "./posts/PostsPage";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <PostsPage />,
    loader: getPosts
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App; */

///////////////////

/* import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { getPosts } from "./posts/getPosts";
import { PostsPage } from "./posts/PostsPage";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <PostsPage />,
    loader: async () => defer({ posts: getPosts() })
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App; */

/////////////////////

/* import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { getPosts } from "./posts/getPosts";
import { PostsPage } from "./posts/PostsPage";

const queryClient = new QueryClient();

const router = createBrowserRouter ([
  {
    path: "/",
    element: <PostsPage />,
    loader: async () => defer({ posts: getPosts() })
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;  */

////////////////////

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { getPosts } from "./posts/getPosts";
import { PostsPage } from "./posts/PostsPage";

const queryClient = new QueryClient();

const router = createBrowserRouter ([
  {
    path: "/",
    element: <PostsPage />,
    loader: async () => {
      const existingData = queryClient.getQueryData(['postsData'])
      if(existingData) {
        return defer({ posts: existingData })
      }
      return defer({
        posts: queryClient.fetchQuery(
          ['postsData'], getPosts
        )
      })
    }
  }
]) // 'getQueryData' function get the existing data from its cache

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App; 