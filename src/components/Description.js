import React, {Component} from 'react';

class Description extends Component {
  render() {   
    return (
      <div className="description">
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
  
export default Description;