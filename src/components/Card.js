import React, {Component} from 'react';
import Ailment from './Ailment';
import Remedy from './Remedy';
import Description from './Description';

class Card extends Component {
  render() {   
    return (
      <div className="card">
        
        <h2>-</h2>
        <Remedy rem={"Sulphur 30C, 4D"}/>
        <Ailment ail={"Poison ivy (also poison oak, poison sumac)"}/>
        <Description desc={"when scratching causes the pustules to bleed, and this bleeding brings relief; after scratching, the pustules may produce a yellowish or white discharge, and what remains of the pustule will be crusty and dry; feels better in a warm bed; symptoms generally left-sided and afflict the scalp; facial swelling may be present; irritable and restless at night, with difficulty sleeping"} />

      </div>
    )
  }
}

export default Card;