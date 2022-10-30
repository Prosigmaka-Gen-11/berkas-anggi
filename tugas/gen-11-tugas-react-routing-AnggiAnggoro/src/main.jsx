
import ReactDOM from 'react-dom/client'
import Perusahaan from './Component/Perusahaan'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DataList from './Component/DataList'
import InputData from './Component/InputData'
import DetailData from './Component/DetailData'
import HomePage from './Component/HomePage'
const router = createBrowserRouter([
  {path: '/', element:<HomePage/>, children: [
    {path:'', element: <Perusahaan/>}
  ]},

  {path:'/form', element: <InputData />, children:[
    {path:':kandidatId', element:<InputData/>},
  ]},
  {path:'/list', element: <DataList />},
  {path:':detailId', element: <DetailData/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
