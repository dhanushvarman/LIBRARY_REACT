import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar.js';
import Topbar from './topbar.js';

function PortalLayout() {
  return (
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <Outlet/>
          </div>
        </div>
      </div>
      
  )
}

export default PortalLayout