import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from  './axios';

function App() {
  const [messages, setMessages] = useState([]);
//fetch all messages when page loads
  useEffect(() => {
    axios.get('/messages/sync')
      .then((res) => {        
        setMessages(res.data);
      })
      .catch((err) => console.log('Error: ' + err.messages));
  }, []);  

//fetch data from pusher via subscribe
  useEffect (() => {
    const pusher = new Pusher('c5126fe6fc5c15423b73', {
      cluster: 'mt1'
    });
//subscribe function
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      console.log(newMessage);
      setMessages([...messages,newMessage]);
    });
    //unsubscribe fuc for cleanup
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);


  console.log(messages );

  return (
    <div className="app">
      <div className="app_body">
        {/* sidebar component */}
        <Sidebar />
        {/* chat component */}
        <Chat messages ={messages} />
      </div>
    </div>
  );
}

export default App;
