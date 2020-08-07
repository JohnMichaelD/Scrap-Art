import React from 'react';
import '../styles/App.css';

import headerBackground from '../assets/wood.jpg'
import logo from '../assets/scraplogo.png'
import message from '../assets/message.png'
import newPost from '../assets/newpost.png'
import list from '../assets/list.png'
import footerBackground from '../assets/wood.jpg'
import glass from '../assets/mag\ glass.png'

import Posting from './Posting.js'

class Listings extends React.Component {
  constructor(props) {
    super(props) 
    this.state={
      
    }
  }

  componentDidMount() {
    let request = new XMLHttpRequest();
      request.open('GET', "http://localhost:3001/posts");
      request.responseType = 'text';

      request.onload = function() {
        console.log(request.response)
      };

      request.send();
  }

  render() {
    const postList = this.props.postingArray.map((posting) =>  <Posting postingInfo={posting}/>);
    return (
      <div className="App">
        <header className="App-header" style={{'background-image': 'url("./wood.jpg")'}}>
            <div className="header"> 
              <div className="headerLeftColumn">
                <div className="actualSearch">
                  <img src={glass} className="glass"/>
                  <input className="searchBar" placeholder="Search Scrap Art!"></input>
                </div>
                <div> 
                  Distance: 5 miles
                </div>
              </div>
              <div className="HeaderLogo"> 
                <img src={logo} className="logo"/>
              </div>
            </div>
            <img src={headerBackground} className="wood"/>
        </header>
        <div className="body">
          {postList}
        </div>
        <footer className="App-footer" style={{'background-image': 'url("./wood2.jpg")'}}>
          <div className="footer">
            <div>
              <img src={list} className="icon"/>
            </div>
            <div className="newPost" onClick={(event) => this.props.newPostClick(event)}>
              <img src={newPost} className="icon"/>
            </div>
            <div className="Message">
              <img src={message} className="icon"/>
            </div>
          </div>
          <img src={footerBackground} className="wood2"/>
        </footer>
      </div>
    );
  }     
}

export default Listings;