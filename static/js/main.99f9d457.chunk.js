(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),c=a.n(s),o=(a(18),a(2)),l=a(3),r=a(5),d=a(4),h=a(1),m=a(6),u=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=.25*this.props.fare,t=this.props.fare-e,a=this.props.onTrip?i.a.createElement("div",{className:"loader"},i.a.createElement("p",{className:"loading"})):i.a.createElement("div",{className:"Split"},i.a.createElement("div",{className:"Split-cost"},"Fare Cost: ",this.props.fare?"NGN ".concat(this.props.fare):0),i.a.createElement("div",{className:"Split-details"},i.a.createElement("div",null,i.a.createElement("p",null,"Company (25%)"),e?i.a.createElement("p",{className:"Split-fee"},"NGN ".concat(e)):""),i.a.createElement("div",null,i.a.createElement("p",null,"Driver"),t?i.a.createElement("p",{className:"Split-fee"},"NGN ".concat(t)):"")));return i.a.createElement("div",{className:"Split-header"},a)}}]),t}(n.Component)),p=a(7),v=a(8),b=(a(20),a(11)),f=a.n(b),g="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCxJnQJe2rERPt9kUg_a8MLb05BQM0nJEs","&libraries=places"),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={location:"",destination:"",locationObj:{},destinationObj:{},distance:"",locSelect:!1,desSelect:!1},a.handleLoad=a.handleLoad.bind(Object(h.a)(a)),a.loadMapAPI=a.loadMapAPI.bind(Object(h.a)(a)),a.handleLocationSelect=a.handleLocationSelect.bind(Object(h.a)(a)),a.handleDestinationSelect=a.handleDestinationSelect.bind(Object(h.a)(a)),a.handleDistance=a.handleDistance.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadMapAPI",value:function(){return i.a.createElement(f.a,{url:g,onLoad:this.handleLoad})}},{key:"handleLoad",value:function(){this.autocompleteLocation=new google.maps.places.Autocomplete(document.querySelector("#location"),void 0),this.autocompleteDestination=new google.maps.places.Autocomplete(document.querySelector("#destination"),void 0),this.autocompleteLocation.addListener("place_changed",this.handleLocationSelect),this.autocompleteDestination.addListener("place_changed",this.handleDestinationSelect)}},{key:"handleLocationSelect",value:function(){this.setState({locSelect:!0});var e=this.autocompleteLocation.getPlace();e.address_components&&this.setState({location:e.formatted_address,locationObj:Object(v.a)({},this.state.locationObj,e)})}},{key:"handleDestinationSelect",value:function(){this.setState({desSelect:!0});var e=this.autocompleteDestination.getPlace();e.address_components&&this.setState({destination:e.formatted_address,destinationObj:Object(v.a)({},this.state.destinationObj,e)})}},{key:"handleDistance",value:function(){var e=this,t=this.state,a=t.locationObj,n=t.destinationObj;this.generateDistance=function(t,a){if("OK"===a)if("ZERO_RESULTS"===t.rows[0].elements[0].status)alert("Are you sure we can get there?"),e.setState({location:"",destination:"",locationObj:{},destinationObj:{},distance:"",locSelect:!1,desSelect:!1});else{var n=t.rows[0].elements[0].distance.value;e.props.getDistance(n)}};var i=a.formatted_address,s=n.formatted_address;(new google.maps.DistanceMatrixService).getDistanceMatrix({origins:[i],destinations:[s],travelMode:"DRIVING"},this.generateDistance)}},{key:"handleChange",value:function(e){e.preventDefault(),e.persist(),this.setState(Object(p.a)({},e.target.name,e.target.value)),this.state.location&&this.state.locSelect&&"location"===e.target.name&&this.setState(function(t){return Object(p.a)({},e.target.name,e.target.value)}),this.state.destination&&this.state.desSelect&&"destination"===e.target.name&&this.setState(function(t){return Object(p.a)({},e.target.name,e.target.value)})}},{key:"render",value:function(){this.state.location&&this.state.destination&&this.handleDistance();return i.a.createElement("div",null,this.loadMapAPI(),i.a.createElement("form",{className:"Map-form"},i.a.createElement("div",{className:"Map-location"},i.a.createElement("label",null,"Location: "),i.a.createElement("input",{type:"text",id:"location",name:"location",placeholder:"Where are you?",value:this.state.location,onChange:this.handleChange})),i.a.createElement("div",{className:"Map-destination"},i.a.createElement("label",null,"Destination: "),i.a.createElement("input",{type:"text",id:"destination",name:"destination",placeholder:"Where are you going?",value:this.state.destination,onChange:this.handleChange}))))}}]),t}(n.Component),O=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=10*Math.ceil((60*this.props.distance+1)/10),t=e+200+500,a=e-200+500;return i.a.createElement("div",{className:"Fare"},i.a.createElement("p",{className:"Fare-title"},"Fare Estimate"),0!==this.props.distance?i.a.createElement("p",{className:"Fare-fare"},"NGN ".concat(a)," - ","NGN ".concat(t)):i.a.createElement("p",{className:"Fare-fare"},"0"))}}]),t}(n.Component)),j=(a(25),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={distance:0,fare:"",onTrip:!1},a.getDistance=a.getDistance.bind(Object(h.a)(a)),a.generateFare=a.generateFare.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getDistance",value:function(e){var t=e/1e3;this.setState({distance:t})}},{key:"generateFare",value:function(){var e=this;if(this.state.distance){this.setState({onTrip:!0});var t=10*Math.ceil((60*this.state.distance+1)/10),a=t+200+500,n=t-200+500,i=Math.floor(Math.random()*(a-n))+n;i=10*Math.ceil((i+1)/10),setTimeout(function(){e.setState({fare:i,onTrip:!1})},i>=1e3?5e3:3e3)}}},{key:"render",value:function(){return i.a.createElement("div",{className:"Ride"},i.a.createElement("div",{className:"Ride-all"},i.a.createElement("div",{className:"Ride-map"},i.a.createElement(E,{getDistance:this.getDistance})),i.a.createElement("div",{className:"Ride-fare"},i.a.createElement(O,{distance:this.state.distance})),i.a.createElement("div",{className:"Ride-button"},i.a.createElement("button",{onClick:this.generateFare,disabled:!!this.state.onTrip},this.state.onTrip?"Ride In Progress...":"Take Ride")),i.a.createElement("div",{className:"Ride-details"},i.a.createElement(u,{fare:this.state.fare,onTrip:this.state.onTrip}))))}}]),t}(n.Component));a(26);var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("p",{className:"App-title"},"Rave Rider"),i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.99f9d457.chunk.js.map