import React, { Component } from 'react';
import "./Split.css";

class Split extends Component {
    render(){
        let companyCom = 0.25 * this.props.fare;
        let driverCom = this.props.fare - companyCom;
        let split = (this.props.onTrip) ?
            <div className="loader">
                <p className="loading"></p>
            </div> :
                <div className="Split">
                    <div className="Split-cost">Fare Cost: {(this.props.fare) ? `NGN ${this.props.fare}` : 0}</div>
                    <div className="Split-details">
                        <div>
                            <p>Company (25%)</p>
                            {(companyCom) ? <p className="Split-fee">{`NGN ${companyCom}`}</p> : ""}
                        </div>
                        <div>
                            <p>Driver</p>
                            {(driverCom) ? <p className="Split-fee">{`NGN ${driverCom}`}</p> : ""}
                        </div>
                    </div>
                </div>
        return(
            <div className="Split-header">
                {split}
            </div>
        )
    }
}

export default Split;