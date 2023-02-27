import { Home } from "./pages";
import { RouterProvider, createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound, Posts, postLoader } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/posts",
    element: Posts,
    loader: postLoader
  }
]);

const App = () => {
  return (
    <RouterProvider {...{ router }} />
  );
}

export default App;
