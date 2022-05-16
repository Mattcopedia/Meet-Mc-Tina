import React from 'react';
import './possibility.css'; 
import possibilityImage from '../../assets/possibility.png';  

const Blog = () => {
  return (
    <div className='gpt3__possibility section_padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
         
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early access to get started</h4>
        <h1 className='gradient__text'>The Possibilities are beyond your Imagination</h1>  
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A hic quasi placeat molestiae cupiditate illum, saepe sequi eveniet recusandae iste?</p>
        <h4>Request Early Access to get Started</h4> 
      </div>   
    </div>
  )
}

export default Blog  
