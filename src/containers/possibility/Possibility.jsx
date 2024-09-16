import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id="possibility">
      <div className="gpt3__possibility_image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early to Get Lorem ipsum dolor sit.</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <h4>Request Early Access to Get Access.</h4>
      </div>
    </div>
  )
}

export default Possibility
