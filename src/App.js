import React from 'react';
import './App.css';

import headerBackground from './wood.jpg'
import logo from './scraplogo.png'
import message from './message.png'
import newPost from './newpost.png'
import list from './list.png'
import footerBackground from './wood2.jpg'
import glass from './mag\ glass.png'

function App() {
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
      <footer className="App-footer" style={{'background-image': 'url("./wood2.jpg")'}}>
        <div className="footer">
          <div>
            <img src={list} className="list"/>
          </div>
          <div className="newPost">
            <img src={newPost} className="newPost"/>
          </div>
          <div className="Message">
            <img src={message} className="message"/>
          </div>
        </div>
        <img src={footerBackground} className="wood2"/>
      </footer>
    </div>
  );
}
function Search() {
  return (
  <div >
    <p>Search Bar </p>
</div> 
  );
}

export default App;
