import React, { Component } from 'react';
import "./Fare.css";

class Fare extends Component {
    render(){
        let distance = Math.ceil(((this.props.distance * 60) + 1)/10) * 10
        let fareUpper = (distance + 200) + 500;
        let fareLower = (distance - 200) + 500;
        return(
            <div className="Fare">
                <p className="Fare-title">Fare Estimate</p>
                {(this.props.distance !== 0) ? <p className="Fare-fare">{`NGN ${fareLower}`} - {`NGN ${fareUpper}`}</p> : <p className="Fare-fare">0</p>}
            </div>
        )
    }
}

export default Fare;