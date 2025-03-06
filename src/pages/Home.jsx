import React, { useRef, useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import hai from '../assets/hai.jpg';
import haivd from '../assets/haivd.mp4';
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/play_icon.png';
import info_icon from  '../assets/info_icon.png'
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';
import Notitlec from '../components/Notitlec';


const Home = () => {
  const [showVideo, setShowVideo] = useState(false); // State to control visibility
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true); // Show video after 3 seconds
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute programmatically
        audioRef.current.play().catch((err) => console.log("Audio playback failed:", err));
      }
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img
          className={`banner-img ${showVideo ? 'hidden' : ''}`}
          src={hai}
          alt=""
        />
      
        <video
          className={`haivd ${showVideo ? 'visible' : ''}`}
          src={haivd}
          ref={videoRef}
          loop
          muted
        />

        <div className='hero-caption'>
          <img  src={hero_title} alt="" className='caption-img' />
          <p>Zo is a nerdy university student on the school's debate team. He has a secret crush on Nita. However, he's too shy . Zo's friends suggest that he get relationship advice from Joke.</p>
          <div className='hero-btns'>
          <button className='btn'><img src={play_icon} alt=" " />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt=" " />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title={"Blockbuster Movies"}/>
        <Notitlec/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Today's Top Picks for You"}/>
        <TitleCards title={"TV Dramas"}/>  
      </div>
    <Footer />
    </div>
  );
};

export default Home;
