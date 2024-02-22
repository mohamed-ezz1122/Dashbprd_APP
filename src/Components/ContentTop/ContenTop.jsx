import React, { useContext } from 'react'
import { sidebarContext } from '../Context/saiedbar-context.jsx'
import './ContentTop.css'
import { iconsImgs } from '../../utils/Image.js'

export default function ContenTop() {
    const {toggleSidebar}=useContext(sidebarContext)
  return <>
  <div className="main-content-top">
    <div className="content-top-left d-flex align-items-center">
        <button type='button' className="sidebar-toggler " onClick={()=>toggleSidebar()}>
            <img src={iconsImgs.menu} alt="" />
        </button>
            <h3 className='content-top-title'>Home</h3>
            
    </div>
    <div className="content-top-btns">
                <button className="search-btn content-top-btn">
             <img src={iconsImgs.search} alt="" />
                </button>
                <button className="notification-btn content-top-btn">
             <img src={iconsImgs.bell} alt="" />
             <span className='notification-btn-dot'></span>
                </button>
            </div>
  </div>
  
  
  </>
}
