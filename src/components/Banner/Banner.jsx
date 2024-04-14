import React from 'react'
import './Banner.css';

export default function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='descrition'>lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}
