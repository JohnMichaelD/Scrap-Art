import React from 'react';
import '../styles/NewPost.css';

import headerBackground from '../assets/wood.jpg'
import footerBackground from '../assets/wood.jpg'
import addPhotoIcon from '../assets/add-image.png'
import dropDown from '../assets/dropdownarrow.png'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="appP">
        <header className="appPost" style={{'background-image': 'url("./wood.jpg")'}}>
          <div className="headerPost">
            Create New Post
          </div>
        </header>  
          <div className="bodyPost">
            <div className="addPhotos">
              <img className="addPhotoIcon" src={addPhotoIcon}></img>
              Add Photos
            </div>
            <div className="postTitle">
              <input className="postInput" placeholder="Title" id='titleInput'></input>
            </div>
            <div className="postPrice">
              <input className="postInput" placeholder="Price" id='priceInput' type="number"></input>
            </div>
            <div className="postCategory">
              Category <img className="dropDown" src={dropDown}></img>
            </div>
            <div className="postInfo">
                <div className="postLocation">
                  <input className="postInput" placeholder="Location" id='locationInput'></input>
                </div> 
                <div className="postSeller">
                  <input className="postInput" placeholder="Name" id='nameInput'></input>
                </div>
            </div>
            <div className="postEmail">
              <input className="postInput" placeholder="Email" id='emailInput'></input>
            </div>
            <div className="postDescription">
              <input className="postInputDescription" placeholder="Description" id='descriptionInput'></input>
            </div>
          </div>
        <footer className="footerPost" style={{'background-image': 'url("./wood.jpg")'}}>
            <div className="postButton" onClick={(event) => this.props.submitPost(event)}>
            Post 
            </div>
        </footer>
      </div>
    )
  }
}



export default NewPost;