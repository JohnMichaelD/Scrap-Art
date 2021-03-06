import React from 'react';
import './styles/App.css';

import Listings from './components/Listings.js'
import NewPost from './components/NewPost.js'
import Account from './components/Account.js'

import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.newPostClick = this.newPostClick.bind(this);
    this.submitPost = this.submitPost.bind(this);

    this.state={
      page: "Account",
      postingArray: []
    }

  }
  newPostClick(event) {
    this.setState({page: "newPost"})
  }

  submitPost(event) {
    var title = document.getElementById('titleInput').value
    var price = document.getElementById('priceInput').value
    var location = document.getElementById('locationInput').value
    var name = document.getElementById('nameInput').value
    var email = document.getElementById('emailInput').value
    var description = document.getElementById('descriptionInput').value

    var newPostJson = {
      title: title,
      price: price,
      category: "bleh",
      location: location,
      sellerName: name,
      email:  email,
      description: description
    }
    console.log(newPostJson)

    //this.setState({page: "home"})
    const Url='http://localhost:3001/post';
    axios({
      method: 'post',
      url: Url,
      data: {
        newPostJson
      }
    })
    .then((data)=> {
      console.log(data)
      this.setState({page : "home"})
    })
    .catch(err=>console.log(err))
  }

  render() {
    console.log(this.state.page)
    if(this.state.page==="home"){
      return(
        <Listings 
          postingArray={this.state.postingArray}
          newPostClick={this.newPostClick}
        />
      )
    } else if(this.state.page==="newPost") {
      return(
        <NewPost
          newPostingArray={this.state.newPostingArray}
          submitPost={this.submitPost}
        />
      )
    } else if(this.state.page==="Account") {
      return(
        <Account/>
      )
    }    
  }  
}
function Search() {
  return (
  <div >
    <p>Search Bar </p>
</div> 
  );
}

export default App;
