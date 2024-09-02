import React from 'react'
import Header from '@/components/header';
import Navbar from '@/components/Navbar';

const Feed = () => {
  return (
    <div className='feed'>

<>
  {/* <Header/> */}

  <Navbar/>


  <div className="container">
    <aside className="sidebar">
      <h3>Your Profile</h3>
      <img src="https://via.placeholder.com/100" alt="Profile Picture" />
      <p>@username</p>
      <p>100 Posts</p>
      <p>200 Followers</p>
      <p>150 Following</p>
    </aside>
    <main className="feed">
      <div className="post">
        <div className="post-header">
          <img src="https://via.placeholder.com/50" alt="User Picture" />
          <div className="post-user-info">
            <span>@user1</span>
            <span>2 hours ago</span>
          </div>
        </div>
        <div className="post-content">
          <p>
            This is the content of the first post. It could be text, images, or
            a combination.
          </p>
        </div>
        <div className="post-actions">
          <button >Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
      <div className="post">
        <div className="post-header">
          <img src="https://via.placeholder.com/50" alt="User Picture" />
          <div className="post-user-info">
            <span>@user2</span>
            <span>5 hours ago</span>
          </div>
        </div>
        <div className="post-content">
          <p>This is the content of the second post. Here's some more text.</p>
        </div>
        <div className="post-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    </main>
    <aside className="right-sidebar">
      <h3>Trending</h3>
      <ul>
        <li>#TrendingTopic1</li>
        <li>#TrendingTopic2</li>
        <li>#TrendingTopic3</li>
      </ul>
    </aside>
  </div>
</>



    </div>
  )
}

export default Feed;