import React from 'react'
import * as mom from "../Happy_Bday_Mom.mp4"
import ReactPlayer from 'react-player'
import './Video.scss'
const Video = (props) => {
    return (
        <ReactPlayer
    
         height="630px" width="930px" playing={true} controls={true} loop={true} 
         url={mom} type="video/mp4"
          style={{marginTop:"70px",border:"5px solid black",boxShadow:"0 0 40px 40px black"}}
         />
    
    )
}
export default Video