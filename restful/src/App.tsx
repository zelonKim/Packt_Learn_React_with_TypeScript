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

import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
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
export default App;
