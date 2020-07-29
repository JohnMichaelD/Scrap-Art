import React from 'react';
import './Posting.css';

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
              Image
            </div>
            <div classname="price">
              Free: 10 Mi.
            </div>
          </div>

      )
    }
}
export default Posting;