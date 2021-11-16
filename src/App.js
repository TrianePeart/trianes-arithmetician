import React, {Component} from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyKeyPad from './components/MyKeyPad';

class App extends Component{
  constructor(){
    super();

    this.state = {
      result: "",
      current: 0,
      previous: "",
      operator:"",
      value: Number(""),
    }
  }

    onClick = button =>{
      console.log(button)
      if(button === "="){
        this.calculate()
      } else if (button === "C"){
        this.reset()
      } else if (button === "AC"){
        this.aC()
      } 
      else{
        this.setState({
          current:this.state.current + button,
          value: this.state.value + button 
        })
      }
    };


  
      Addition = () => {
      const oldNumber = this.state.current
      this.setState({current: "", operator: "plus", previous: oldNumber, value: this.state.value + " + "});
    }
  
      Subtraction = () => {
      const oldNumber = this.state.current
      this.setState({current: "", operator: "subtract", previous: oldNumber, value: this.state.value + " - "});

    }
  
      Multiplication = () => {
      const oldNumber = this.state.current
      this.setState({current: "", operator: "multiplication", previous: oldNumber, value: this.state.value + " * "});
    
    }
  
      Division = () => {
      const oldNumber = this.state.current
      this.setState({current: "", operator: "division", previous: oldNumber, value: this.state.value + " ÷ "});
     
    }

    calculate = () => {
    
      if(this.state.operator === "plus") {
        this.setState({result: Number(this.state.current) + Number(this.state.previous)})
      } else if(this.state.operator === "subtract") {
        this.setState({result: Number(this.state.current) - Number(this.state.previous)})
      } else if(this.state.operator === "multiplication") {
        this.setState({result: Number(this.state.current) * Number(this.state.previous)})
      } else if(this.state.operator === "division") {
        this.setState({result: Number(this.state.current) / Number(this.state.previous)})
      } 
      
    }
      

    reset = () => {
      const length = this.state.value.length - this.state.current.length 
      const newValue = this.state.value.slice(0, length)
      this.setState({
        current: "", 
        operator:"",
        previous:"",
        value: newValue
      })
    };
    
    aC = () =>{
      this.setState({
        result: "",
        current: "",
        previous: "",
        operator:"",
        value: ""
      })
    }

  render() {
    console.log(this.state)
    return(
      <div>
       <div><h1>Triane's Arithmetician</h1></div>
        <div className="calculator-body">
          <MyComponent result={this.state.result} current={this.state.current} value={this.state.value}/>

          
          <MyKeyPad onClick={this.onClick} calculate={this.calculate} Addition={this.Addition} Subtraction={this.Subtraction} Multiplication={this.Multiplication} Division={this.Division}/>
        </div>
    
      </div>

    );
  }
}


export default App;
