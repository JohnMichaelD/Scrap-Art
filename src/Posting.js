import React from 'react';
import './Posting.css';

import metal from './Metal.jpg'

class Posting extends React.Component {
    constructor(props) {
      super(props) 
      this.state={

      }
      console.log(this.props.postingInfo)
    }
    render() {
      return (
          <div className="posting">
            <div className="image">
              <img src={metal} className="listImage"/>
            </div>
            <div className="textBox">
              <div className="price">
                ${this.props.postingInfo.price}
              </div>
              <div className="title">
                <div>
                  {this.props.postingInfo.title}
                </div>
                <div>
                  {this.props.postingInfo.location}
                </div>
              </div>
            </div>
          </div>

      )
    }
}
export default Posting;