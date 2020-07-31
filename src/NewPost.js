import React from 'react';
import './NewPost.css';

import headerBackground from './wood.jpg'
import logo from './scraplogo.png'
import message from './message.png'
import newPost from './newpost.png'
import list from './list.png'
import footerBackground from './wood2.jpg'
import glass from './mag\ glass.png'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="App">
        <header className="App-header" style={{'background-image': 'url("./wood.jpg")'}}></header>
          <div className="header" style={{'background-image': 'url("./wood.jpg")'}}>
            hello
          </div>
      </div>
    )
  }
}



export default NewPost;