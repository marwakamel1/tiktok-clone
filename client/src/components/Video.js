import React,{useRef,useState} from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,song,likes,shares,messages}) {
    const [Playing, setPlaying] = useState(false)
    const vidRef =useRef(null)
    const handlePress= () =>{
      if(Playing){
          vidRef.current.pause();
          setPlaying(false)
      }
      else {
          vidRef.current.play()
          setPlaying(true)
      }
    }
    return (
        <div className="video">
          <video loop 
            onClick={handlePress}
            ref={vidRef}
          className="video_player" src={url}></video> 
          <VideoFooter channel={channel} description={description} song={song}/>
          <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video
