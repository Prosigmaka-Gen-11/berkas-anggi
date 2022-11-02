import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import Product from './Product'
import ToDoList from './TodoList'
import ProtectedPage from './ProtectedPage'

const router = createBrowserRouter([
  {path:"/login", element :<LoginPage/>  },
  {path:"", element:<ProtectedPage/>, children: [
    {path:"/", element:<HomePage/> },
    {path:"/prod", element :<Product/>},
    {path:"/todo", element: <ToDoList/>}

  ]}

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
)
