import React from "react";
import ReactDOM from "react-dom";
import Seasons from "./Seasons";

// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (info) => console.log(info),
//         (err) => console.log(err)
//     );
//     return<h1>Latitutude:</h1>
//     };
class App extends React.Component{
    
state= {lat: null, errorMessage: null}

componentDidMount(){
window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({lat: position.coords.latitude}),
    (err) => this.setState({errorMessage: err.message})
)
}
renderContent(){
  if (this.state.lat && !this.state.errorMessage){
    return <Seasons lat={this.state.lat}/>
    // <div> Latitude: {this.state.lat}</div>
  }
  if (this.state.errorMessage && !this.state.lat){
    return<div>Error: {this.state.errorMessage}</div>
  }
  
return<div>Loading...</div>;
}
render(){
  return<div>{this.renderContent()}</div>;
}


   
}
ReactDOM.render(<App/>, document.querySelector("#root"));