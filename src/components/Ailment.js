import React, {Component} from 'react';

class Ailment extends Component {
  render() {   
    return (
      <div className="ailment">
        <h3>{this.props.ail}</h3>
      </div>
    )
  }
}
  
export default Ailment;