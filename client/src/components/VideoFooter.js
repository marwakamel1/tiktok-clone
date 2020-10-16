import React from 'react'
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from "react-ticker"

function VideoFooter({channel,description,song}) {
    return (
        <div className="footer">
            <div className="footerText">
    <h3>{channel}</h3>
    <p>{description}</p>
                <div className="footerTicker">
                    <MusicNoteIcon 
                    className="footer_icon"/>
                    <Ticker mode="smooth">
                        {
                            ({index}) => (
                            <p>{song}</p>
                            )
                        }
                </Ticker>
                </div>
            </div>
            <img src="../Record.png"></img>
        </div>
    )
}

export default VideoFooter
