import React from 'react';

function Intro() {
  return (
    <div className='intro-section'>
      <p className='intro-description'>"Welcome to my portfolio! I'm Ayush Kumar Pal, a skilled web developer specializing in creating seamless and visually stunning online experiences. Explore my work and let's bring your digital vision to life."</p>
      {/* <a href="" download={"../Resume.pdf"}>
        <button className='cv-btn'>RESUME</button>
      </a> */}
      <div className='profile_pic'>
        <img src="pp.png" alt="profile-picture" />
      </div>
    </div>
  )
}

export default Intro