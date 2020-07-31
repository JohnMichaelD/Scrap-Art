import React from 'react';
import './App.css';

import Listings from './Listings.js'
import NewPost from './NewPost.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.newPostClick = this.newPostClick.bind(this);

    this.state={
      page: "home",
      postingArray: [{
        title: "Example Title",
        price: 10.2,
        category: "Example Category",
        location: 94610,
        sellerName: "Exaple Name",
        email:  "Example@Email.com",
        description: "Example Description",
      },{
        title: "Title 2",
        price: 0,
        category: "Metal",
        location: 94611,
        sellerName: "Scrap SF",
        email:  "Example@Email.com",
        description: "Example Description",
      },{
        title: "Title 2",
        price: 0,
        category: "Metal",
        location: 94611,
        sellerName: "Scrap SF",
        email:  "Example@Email.com",
        description: "Example Description"
      }
    ]
    }

  }
  newPostClick(event) {
    this.setState({page: "newPost"})
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
        />
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
