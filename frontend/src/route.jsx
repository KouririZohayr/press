import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Singup from "./pages/Singup";
import DefaultLayout from "./Componenet/DefaultLayout";
import GuestLayout from "./Componenet/GuestLayout";
const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
            path: '/signup',
            element: <Singup />
          }
  
      ]
    },
   /*  {
      path: "*",
      element: <NotFound />
    } */
  ])
  
  export default router;