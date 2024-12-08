
import HomeLayout from '../layout/HomeLayout'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'


const routes= createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      loader: () => fetch('/Gadgets.json'),
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/gedget",
      element: <ErrorPage></ErrorPage>
    },
    ])

  export default routes