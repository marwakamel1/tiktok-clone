import React,{useEffect,useState} from 'react';
import Video from './Video';
import axios from "../axios"

function App() {
  const [videos, setvideos] = useState([])
  useEffect (() => {
   async function fetchPosts () {
      const response = await axios.get()
      setvideos(response.data) 

      return response
   }

   fetchPosts()
  },[])
  return (
    <div className="app">
      <div className="App_videos">
        {videos.map(({_id,url,description,channel,song,likes,messages,shares}) => (<Video
          key={_id}
          url={url}
          channel={channel}
          song={song}
          description={description}
          likes={likes}
          shares={shares}
          messages={messages}
        />))}
      </div>
 
    </div>
  );
}

export default App;
