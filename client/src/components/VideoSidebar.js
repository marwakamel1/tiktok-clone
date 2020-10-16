import React,{useState} from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function VideoSidebar({likes,shares,messages}) {
    const [liked, setLiked] = useState(false)
    return (
        <div className="sidebar">
           <div className="sidebarButton">
               {liked ? (  <FavoriteIcon fontSize="large"  onClick={e => setLiked(false)}/>):
               (  <FavoriteBorderIcon fontSize="large" 
               onClick={e => setLiked(true)}/>)}
              
    <p>{likes}</p>
               </div> 
           <div className="sidebarButton">
               <MessageIcon fontSize="large" />
    <p>{messages}</p>
           </div>
           <div className="sidebarButton">
               <ShareIcon fontSize="large" />
    <p>{shares}</p>
           </div>
        </div>
    )
}

export default VideoSidebar
