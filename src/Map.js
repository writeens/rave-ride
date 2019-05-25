import React, { Component } from 'react'
// Import HTTP request handler

// Import Map css files
import "./Map.css";

// Import Script loader
import Script from "react-load-script";

/*global google*/

const URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_API}&libraries=places`;

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {location: "", destination:"", locationObj: {}, destinationObj:{}, distance:"", locSelect: false, desSelect:false}

        this.handleLoad = this.handleLoad.bind(this);
        this.loadMapAPI = this.loadMapAPI.bind(this);
        this.handleLocationSelect = this.handleLocationSelect.bind(this);
        this.handleDestinationSelect = this.handleDestinationSelect.bind(this);
        this.handleDistance = this.handleDistance.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Load MAPS API script
    loadMapAPI(){
        return(
            <Script url={URL} onLoad={this.handleLoad} />
        )
    }


    // Handles all API code upon load
    handleLoad(){
        // Declare Options For Autocomplete
        let options;
        
        this.autocompleteLocation = new google.maps.places.Autocomplete(document.querySelector("#location"), options);
        this.autocompleteDestination = new google.maps.places.Autocomplete(document.querySelector("#destination"), options);

        // Retrieve place information from selected results
        this.autocompleteLocation.addListener("place_changed", this.handleLocationSelect);
        this.autocompleteDestination.addListener("place_changed", this.handleDestinationSelect);
    }

    //Handles all code relating to selecting a location
    handleLocationSelect(){
        this.setState({locSelect: true})
        //Extract Address Object
        let addressObject = this.autocompleteLocation.getPlace();
        let address = addressObject.address_components;

        //Check if address is valid
        if(address){
            this.setState({
                location: addressObject.formatted_address,
                locationObj: {...this.state.locationObj, ...addressObject}
            })
        }
    }

    //Handles all code relating to selecting a destination
    handleDestinationSelect(){
        this.setState({desSelect: true})
        //Extract Address Object
        let addressObject = this.autocompleteDestination.getPlace();
        let address = addressObject.address_components;

        //Check if address is valid
        if(address){
            this.setState({
                destination: addressObject.formatted_address,
                destinationObj: {...this.state.destinationObj, ...addressObject}
            })
        }
    }

    //Calculate Distance
    handleDistance(){
        const {locationObj, destinationObj} = this.state;
        
        this.generateDistance = (response, status) => {
            if(status === "OK"){
                if(response.rows[0].elements[0].status === "ZERO_RESULTS"){
                    alert("Are you sure we can get there?")
                    this.setState({
                        location: "",
                        destination: "",
                        locationObj:{},
                        destinationObj:{},
                        distance:"", 
                        locSelect: false, 
                        desSelect:false
                    })
                }else {
                    let distance = response.rows[0].elements[0].distance.value;
                    // let duration = response.rows[0].elements[0].duration.text;
                    this.props.getDistance(distance);
                }
            }
        }

        let origin = locationObj.formatted_address;
        let destination = destinationObj.formatted_address;
        let service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: "DRIVING",
        }, this.generateDistance);
    }

    // Handles all changes to the input form
    handleChange(evt){
        evt.preventDefault();
        evt.persist();
        this.setState({
            [evt.target.name]: evt.target.value
        })
        if(this.state.location && this.state.locSelect && evt.target.name === "location"){
            this.setState(st => ({
                [evt.target.name]: evt.target.value
            }))
        }
        if(this.state.destination && this.state.desSelect && evt.target.name === "destination"){
            this.setState(st => ({
                [evt.target.name]: evt.target.value
            }))
        }
    }

    render(){
        let sendDistance = (this.state.location && this.state.destination) ? this.handleDistance() : null
        return(
            <div>
                {this.loadMapAPI()}
                <form className="Map-form">
                    <div className="Map-location">
                        <label>Location: </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Where are you?"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="Map-destination">
                        <label>Destination: </label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            placeholder="Where are you going?"
                            value={this.state.destination}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Map;