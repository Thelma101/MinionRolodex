
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class AppThelma extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Thelma", lastName: "Akpata" },
      company: "UBA",
    };
    } 
    clickChange() {
      this.setState(()=> {
        return{
        // { 
        // name: { firstName: "Dr. Thelma", lastName: "Bennett" } ,
        // company: "Halian"
        // }
        name: { firstName: "Dr. Thelma", lastName: "Bennett" } ,
        company: "Halian"
        }
        }, ()=> {
          console.log(this.state);
        }
      );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, my name is {this.state.name.firstName}{" "}
            {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => this.clickChange()}>
            Click to Change
          </button>
        </header>
      </div>
    );
  }
}

export default AppThelma;