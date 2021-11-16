import React, {Component} from 'react';

class MyKeyPad extends Component {

    render(){
       return (
           <div className="button">


               <button name="1" onClick={b => this.props.onClick(b.target.name)}>1</button> 
               <button name="2"  onClick={b => this.props.onClick(b.target.name)}>2</button> 
               <button name="3"  onClick={b => this.props.onClick(b.target.name)}>3</button> 
               <button name="/" class="operator" onClick={this.props.Division}>÷</button><br/>
               
            
               <button name="4" onClick={b => this.props.onClick(b.target.name)}>4</button> 
               <button name="5"  onClick={b => this.props.onClick(b.target.name)}>5</button> 
               <button name="6"  onClick={b => this.props.onClick(b.target.name)}>6</button> 
               <button name="+" class="operator" onClick={this.props.Addition}>+</button><br/>

               <button name="7"  onClick={b => this.props.onClick(b.target.name)}>7</button> 
               <button name="8"  onClick={b => this.props.onClick(b.target.name)}>8</button> 
               <button name="9"  onClick={b => this.props.onClick(b.target.name)}>9</button> 
               <button name="*" class="operator" onClick={this.props.Multiplication}>x</button>
               <br/>

               
               <button name="+/-" class="operator" onClick={b => this.props.onClick(b.target.name)}>+/-</button>
               {/* create negative/positive button function inside of app JS */}
               
               <button name="0" onClick={b => this.props.onClick(b.target.name)}>0</button>
               <button name="." class="decimal" onClick={b => this.props.onClick(b.target.name)}>.</button>
               <button name="-" class="operator" onClick={this.props.Subtraction}>-</button> 
              <br/>

              <button name="AC" class="all-clear" onClick={b => this.props.onClick(b.target.name)}>AC</button>
              <button name="C" class="operator" onClick={b => this.props.onClick(b.target.name)}>C</button> 
              <button name="=" class="equal sign" onClick={b => this.props.onClick(b.target.name)}>=</button>
               <br/>

    

           </div>

       )
    }
}

export default MyKeyPad;