import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Contnet from './Components/Content/Contnet.jsx'
import { SidebarContextProvider } from './Components/Context/saiedbar-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarContextProvider>
   
    <App />
    
   
   
    </SidebarContextProvider>
   

  

    
    
    
  </React.StrictMode>,
)