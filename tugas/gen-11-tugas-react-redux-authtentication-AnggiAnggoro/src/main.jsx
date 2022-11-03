import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './LoginPage'
import store from'./Store'
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import ProtectedPage from './ProtectedPage'

const router = createBrowserRouter([
    {path:'/login', element:<LoginPage/>},
    {path:"", element:<ProtectedPage/>, children:[
        {path:'/', element: <Home/>}
    ]}
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
   
)
