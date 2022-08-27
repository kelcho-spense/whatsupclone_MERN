import { Avatar } from '@mui/material'
import React from 'react';
import "./sidebarchat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat_infor">
          <h2>Room Name</h2>
          <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat