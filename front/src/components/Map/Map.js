import { Component } from "react";
import "./Map.css";
import Table from "./Table";

class Map extends Component{
  
  constructor(props)
  {
    super(props)
    this.state = { counter: 1, M: []}
  }

  componentDidMount()
  {
    let Mesas = [];
    let index=1;
    for(let i = 1;i<=120;i++)
    {
      Mesas.push({"id": index, "active": true });
      index = index + 1;
      console.log(this.state.counter);
    } 
    this.setState({M: Mesas})
  }

  render(){
    return (
      <div className="main-container">
        <div className="frame-1">Hotel</div>
  
        <div className="container">
          {/* first */ console.log(this.state.M)}
          <div className="container-column">
            {this.state.M.map((values, index)=>{
              return <Table key={index} id={`${values.id}`}/>
            })}
            
          </div>
        </div>
      </div>
    )
  }
};

export default Map;
