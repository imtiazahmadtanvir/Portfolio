
import HomeLayout from '../layout/HomeLayout'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'


const routes= createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/lesson",
      element: <ErrorPage></ErrorPage>
    },
    ])

  export default routes