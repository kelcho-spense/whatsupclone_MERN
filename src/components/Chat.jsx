import  Avatar  from '@mui/material/Avatar';
import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./chat.css";
import axios from '../axios';
function Chat({ messages }) {
  const [input, setInput] = useState('');
  const sendMessage = async(e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      "message": input,
      "name":"Mary jane",
      "timestamp":"now",
      "received":true,
    });
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div> 
        <div className="chat__headerRight">
          <IconButton><SearchOutlinedIcon /></IconButton> 
          <IconButton><AttachFileOutlinedIcon /></IconButton> 
          <IconButton><MoreVertIcon /></IconButton> 
        </div>         
      </div>
      <div className="chat__body">
        {messages.map((message,index) => (
          <p className={`chat__message ${message.received && "chat__receiver"}`} key={index}>
            <span className="chat__name">{message.name}</span>
              {message.message}
            <span className="chat__timestamp">
            {message.timestamp} 
            </span>
          </p>
        ))}       
              
      </div>
      <div className="chat__footer">
          <div className="chat__footer-icons">
            <IconButton><InsertEmoticonOutlinedIcon /></IconButton>
            <IconButton><AttachFileIcon /></IconButton>
          </div>          
          <form action="">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message'  />
            <button type='submit' onClick={sendMessage}>Send a message</button>
          </form>
          <IconButton><MicIcon /></IconButton>
      </div>
    </div>
  )
}

export default Chat