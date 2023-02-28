import { Home } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound, Posts, postsLoader, Post, postLoader, Comments, commentLoader } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: postsLoader,
  },
  {
    path: "/posts/:id",
    element: <Post />,
    loader: postLoader,
  },
  {
    path: "/comments/:id",
    element: <Comments />,
    loader: commentLoader,
  },
]);

const App = () => <RouterProvider {...{ router }} />;

export default App;
