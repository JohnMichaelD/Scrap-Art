import React from 'react';
import './NewPost.css';

import headerBackground from './wood3.jpg'
import footerBackground from './wood.jpg'
import addPhotoIcon from './add-image.png'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="appP">
        <header className="appPost" style={{'background-image': 'url("./wood3.jpg")'}}>
          <div className="headerPost">
            Create New Post
          </div>
        </header>  
          <div className="bodyPost">
            <div className="addPhotos">
              <img className="addPhotoIcon" src="./add-image.png"></img>
              Add Photos
            </div>
            <div className="postTitle">
              <input className="postInput" placeholder="Title"></input>
            </div>
            <div className="postPrice">
              <input className="postInput" placeholder="Price"></input>
            </div>
            <div className="postCategory">
              Category <img className="dropDown" src="./dropdownarrow.png"></img>
            </div>
            <div className="postInfo">
                <div className="postLocation">
                  Location
                </div> 
                <div className="postSeller">
                Name 
                </div>
            </div>
            <div className="postEmail">
              <input className="postInput" placeholder="Email"></input>
            </div>
            <div className="postDescription">
              <input className="postInputDescription" placeholder="Description"></input>
            </div>
          </div>
        <footer className="footerPost" style={{'background-image': 'url("./wood.jpg")'}}>
            <div className="postButton">
            Post
            </div>
        </footer>
      </div>
    )
  }
}



export default NewPost;