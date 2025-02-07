
import MainLayout from '../layout/MainLayout'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,   
      },
    
])

export default routes