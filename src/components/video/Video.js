import React from 'react'
import './video.css'
import Vide from '../video/video2.jpg'
import ReactPlayer from 'react-player'

function Video() {
    return (
      <div className='video-tx'>
          <h1>MIRA NUESTRO CANAL DE YOUTUBE</h1>
         
              <div className='vi'>
         <ReactPlayer
          url='https://youtu.be/fURAMByYC28'
          className='react-player'
          playing
          width='100%'
          height='200%'
          controls
          volume={0.5}/>
          
          
        
        </div>
      </div>
      
          
      
      
    )
}
export default Video