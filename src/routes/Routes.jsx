
import MainLayout from '../layout/MainLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import home from '../pages/home.jsx'
import statistics from '../pages/statistics.jsx'
import dashboard from '../pages/dashboard.jsx'
//path for multiple page its througing from array
const routes= createBrowserRouter(
    [
         {
            path: '/',
            // mainlayout alternative of App.jsx
            element: <MainLayout/>,
            children:[
                {
                    path:'/',
                    element:<home/>,
                    children:[
                        
                    ]
                },
                {
                    path:'/statistics',
                    element: <statistics />
                },
                {
                    path:'/dashboard',
                    element: <dashboard />
                }
            ]
         },
    ]
  )

  export default routes