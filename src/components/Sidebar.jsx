import React from 'react';
import  "./sidebar.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src="https://lh3.googleusercontent.com/a-/AFdZucpYkoQraMGzAUjo-d2SbIH19cU5-1r-rtXoc4J02A=s317-p-rw-no"/>
        <div className="sidebar_headerRight">
           <IconButton><DonutLargeIcon /></IconButton> 
            <IconButton><ChatIcon /></IconButton> 
            <IconButton><MoreVertIcon /></IconButton> 
        </div>        
      </div>
      <div className="sidebar_search">
            <div className="sidebar_searchContainer">
              <SearchOutlinedIcon />
              <input type="text" placeholder="Search or start a new Chat"/>
            </div>
      </div>
      <div className="sidebar_charts">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar