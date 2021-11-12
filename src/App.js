import React, {Component} from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyKeyPad from './components/MyKeyPad';

class App extends Component{
  constructor(){
    super();

    this.state = {
      result: "",
      thing: "test"
    }
  }
    calculator = (doMath) => {

    let math = "1 + 2".split(' ');
    switch (math[1]) {
      case '+':
    return Math.round((+math[0] + +math[2]) * 100) / 100;
    break;
    case '-':
    return Math.round((+math[0] - +math[2]) * 100) / 100;
    break;
    case '/':
    return Math.round((+math[0] / +math[2]) * 100) / 100;
    break;
    case '*':
    return Math.round((+math[0] * +math[2]) * 100) / 100;
    break;
    
    };
    };
    



  render() {
    return(
      <div>
        <div className="calculator-body">
          <h1>Triane's Arithmetician</h1>
          <MyComponent result={this.state.result}/>
          <MyKeyPad onClick={this.onClick}/>
          <button onClick= {this.calculator}>h</button>
        </div>
        
      </div>

    );
  }
}


export default App;
