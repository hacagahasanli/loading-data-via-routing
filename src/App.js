import { Home } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound, Posts, postsLoader, Post, postLoader, Edit } from "./Components";

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
    path: "/posts/:id/edit",
    element: <Edit />,
    // loader: postLoader,
  },
]);

const App = () => <RouterProvider {...{ router }} />;

export default App;
