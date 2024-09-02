import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Navbar from '@/components/Navbar'


const Home_page = () => {
  return (
    <div className='home'>
      {/* <SideBar/> */}
      <Header/>
      {/* <Navbar/> */}
      
  
  <section className="hero">
    {/* <div className='image'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur mollitia officiis, placeat ut a hic sit non possimus nobis maxime doloribus exercitationem?</div> */}
    
    <div className="hero-content">
      <h2>Connect with your friends and the world around you</h2>
      <p>Join SocialConnect today and start sharing your moments.</p>
      <a href="#" className="btn hero-btn">
        Get Started
      </a>
    </div>
  </section>
  <section className="features">
    <div className="feature">
      <i className="fas fa-user-friends" />
      <h3>Connect</h3>
      <p>Find and connect with your friends easily.</p>
    </div>
    <div className="feature">
      <i className="fas fa-photo-video" />
      <h3>Share</h3>
      <p>Share photos, videos, and updates with your network.</p>
    </div>
    <div className="feature">
      <i className="fas fa-bell" />
      <h3>Stay Updated</h3>
      <p>Receive notifications on the latest updates and activities.</p>
    </div>
  </section>
  <footer>
    <p>© 2024 SocialConnect. All rights reserved.</p>
  </footer>
  {/* Font Awesome for Icons */}


 
    
    </div>
    
  )
  
}

export default Home_page