import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./Components/Main/Main";

import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
      ],
    },
  ]);
  return (
    <div className="w-9/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
