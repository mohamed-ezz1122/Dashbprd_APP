

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';

import Layout from './Components/Layout/Layout.jsx'
import Asaied from './Components/Saidbar/Asaied.jsx'
import Contnet from './Components/Content/Contnet.jsx';

function App() {
  
  // const routes=createBrowserRouter([
  //   {path:"",element:<Layout/>,children:[
  //     {path:'/home',element:<App/>},
  //     {index:true,element:<App/>},
  //   ]}
  // ])

  return (
    <div >
      
      {/* <RouterProvider router={routes}> */}
      <div className='app'>
         <Asaied/>
      <Contnet/>
      </div>
      {/* </RouterProvider> */}
     
      
      
    </div>
  )
}

export default App
