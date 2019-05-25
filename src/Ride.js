import React, { Component } from 'react';
import Split from "./Split";
import Map from "./Map";
import Fare from "./Fare";
import "./Ride.css";

class Ride extends Component {
    constructor(props){
        super(props);

        this.state = { distance:0, fare:"", onTrip:false};
        this.getDistance = this.getDistance.bind(this);
        this.generateFare = this.generateFare.bind(this);
    }

    getDistance(dist){
        const distance = dist/1000;
        this.setState({distance:distance});
    }

    generateFare(){
        if(this.state.distance){
            this.setState({onTrip: true});
            let distance = Math.ceil(((this.state.distance * 60) + 1)/10) * 10
            let max = (distance + 200) + 500;
            let min = (distance - 200) + 500;
            let fare = Math.floor(Math.random() * (max-min)) + min
            fare = Math.ceil((fare + 1)/10)* 10;
            setTimeout(() => {
                this.setState({fare: fare, onTrip: false})
            },(fare >= 1000) ? 5000 : 3000)
        }
    }
    render(){
        return(
            <div className="Ride">
                <div className="Ride-all">
                    <div className="Ride-map">
                        <Map getDistance={this.getDistance} />
                    </div>
                    <div className="Ride-fare">
                        <Fare distance={this.state.distance}/>
                    </div>
                    <div className="Ride-button">
                        <button onClick={this.generateFare} disabled={(this.state.onTrip) ? true: false}>{(this.state.onTrip) ? "Ride In Progress..." : "Take Ride"}</button>
                    </div>
                    <div className="Ride-details">
                        <Split fare={this.state.fare} onTrip={this.state.onTrip}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ride;