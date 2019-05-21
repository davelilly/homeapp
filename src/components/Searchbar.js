import React, {Component} from 'react';

class Searchbar extends Component {
  
  handleQ(evnt){
    console.log(evnt.target.value)
  }
  
  render() {
    return (        
        <div className="searchbar">
          <label >Search</label>
          <input onChange={this.handleQ.bind(this)}></input>
      </div>
    )
  }
}
  
export default Searchbar;