import React from 'react';
import './Posting.css';

import metal from './Metal.jpg'

class Posting extends React.Component {
    constructor(props) {
      super(props) 
      this.state={

      }
  
    }
    render() {
      return (
          <div className="posting">
            <div className="image">
              <img src={metal} className="listImage"/>
            </div>
            <div classname="textBox">
              <div classname="price">
                Price
              </div>
              <div classname="title">
                <div>
                  Title
                </div>
                <div>
                  Location
                </div>
              </div>
            </div>
          </div>

      )
    }
}
export default Posting;