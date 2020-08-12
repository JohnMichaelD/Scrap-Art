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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state={ 
      postingArray: [
        // title: "Example Title",
        // price: 10.2,
        // category: "Example Category",
        // location: 94610,
        // sellerName: "Exaple Name",
        // email:  "Example@Email.com",
        // description: "Example Description",
      ]
    }
  }

  /// When Listings runs, componentDidMount runs and gets from /posts
  componentDidMount() {
    let request = new XMLHttpRequest();
      request.open('GET', "http://localhost:3001/posts");
      request.responseType = 'json';

      let that = this
      request.onload = function() {
        let fetchedPosts = [] 

        for (let i = 0; i < request.response.length; i++) {
          let tempPost = {
            title: request.response[i].title, 
            price: request.response[i].price,
            category: request.response[i].category,
            location: request.response[i].location,
            sellerName: 'John Doe',
            email: 'JD@gmail.com',
            description: request.response[i].description,
          }
          fetchedPosts.push(tempPost)
       }

        that.setState({postingArray: fetchedPosts})
        console.log(request.response[0])
      }

      request.send();
  }

  render() {
    const postList = this.state.postingArray.map((posting) =>  <Posting postingInfo={posting}/>);
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