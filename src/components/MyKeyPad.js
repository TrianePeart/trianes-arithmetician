import React, {Component} from 'react';

class MyKeyPad extends Component {

    render(){
       return (
           <div className="buttons">


               <button className= "button" name="1" onClick={b => this.props.onClick(b.target.name)}>1</button> 
               <button className= "button"name="2"  onClick={b => this.props.onClick(b.target.name)}>2</button> 
               <button className= "button"name="3"  onClick={b => this.props.onClick(b.target.name)}>3</button> 
               <button className= "button" name="/" onClick={this.props.Division}>÷</button><br/>
               
            
               <button className= "button"name="4" onClick={b => this.props.onClick(b.target.name)}>4</button> 
               <button className= "button"name="5"  onClick={b => this.props.onClick(b.target.name)}>5</button> 
               <button className= "button"name="6"  onClick={b => this.props.onClick(b.target.name)}>6</button> 
               <button className= "button" name="+"  onClick={this.props.Addition}>+</button><br/>

               <button className= "button"name="7"  onClick={b => this.props.onClick(b.target.name)}>7</button> 
               <button className= "button"name="8"  onClick={b => this.props.onClick(b.target.name)}>8</button> 
               <button className= "button" name="9"  onClick={b => this.props.onClick(b.target.name)}>9</button> 
               <button className= "button" name="*"  onClick={this.props.Multiplication}>x</button>
               <br/>

               
               <button className= "button" name="+/-" onClick={this.props.negPos}>+/-</button>
               
               <button className= "button" name="0" onClick={b => this.props.onClick(b.target.name)}>0</button>
               <button className= "button" name="."  onClick={b => this.props.onClick(b.target.name)}>.</button>
               <button className= "button" name="-"  onClick={this.props.Subtraction}>-</button> 
              <br/>

              <button className= "button" name="AC"  onClick={b => this.props.onClick(b.target.name)}>AC</button>
              <button className= "button" name="C" onClick={b => this.props.onClick(b.target.name)}>C</button> 
              <button className= "button" name="="  onClick={b => this.props.onClick(b.target.name)}>=</button>
               <br/>

    

           </div>

       )
    }
}

export default MyKeyPad;