import React from 'react';
import '../../App.scss';
import { Button } from '../button/Button';
import './HeroSection.scss';
import {NavLink} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Create boilerplate template</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
    
          <NavLink to="wrapper" >     Click Here      </NavLink>
        </Button>




        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          DASHBOARD 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
