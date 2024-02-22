import React from 'react'
import { Outlet } from 'react-router-dom'
import Asaied from '../Saidbar/Asaied.jsx'

export default function Layout() {
  return <>
  
    <Asaied/>
  <Outlet>
  </Outlet>
  
  
  </>
}
