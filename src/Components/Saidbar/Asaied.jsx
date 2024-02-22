import React, { useContext, useEffect, useState } from 'react'
import  "./Asaied.css"
import { personsImgs } from '../../utils/Image.js'
import {saidbarListData} from '../../Data/Data.js'
import { Link } from 'react-router-dom'
import { sidebarContext } from '../Context/saiedbar-context.jsx'
export default function Asaied() {

  const [activeLinkeIdx]=useState(1)
  const [sidebarClass,setSidebarclass]=useState('')
  const {isSidebarOpen} = useContext(sidebarContext)
  console.log(sidebarClass);
//handel close and open sidebar
useEffect(() => {
  if(isSidebarOpen){
    setSidebarclass("sidebar-change")
  }else{
    setSidebarclass('')
  }
  
}, [isSidebarOpen])



  // console.log(saidbarListData);
  return <>
  {/* //sidebar disgin */}
  <div className={`sidebar ${sidebarClass}`}>
    <div className={`user_info`}>
      <div className={`img-info img-fit-cover`}>
        <img src={personsImgs.person_two} alt="user image"  />
      </div>
      <span className='info-Name'>
        Omnia
      </span>



    </div>
    {/* navbar disgin */}
    <nav className='navigate_nav '>
      <ul className='nav-list'>
      {
        saidbarListData.map((ele)=>(
          <li className='nav-item'key={ele.id} >
            <a href="" className={`nav_link ${ele.id ===activeLinkeIdx ? 'active':null}`}>
              <img src={ele.HomeImage} className='nav-link-icon' alt={ele.title} />
              <span className='nav-link-text'>
                {ele.title}
              </span>
            </a>

          </li>
        ))
      }
      </ul>


    </nav>


  </div>
  
  
  </>
}
