import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid4 from '../videos/video-1.mp4'


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid4} autoPlay loop muted />
      <h1>Sean Chang</h1>
      <p>Advertising article generator</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
