import React, {Component} from 'react';

class MyKeyPad extends Component {

    render(){
       return (
           <div className="button">
               <button name="(" onClick={b => this.props.onClick(b.target.name)}>(</button>
               <button name="AC" onClick={b => this.props.onClick(b.target.name)}>AC</button>
               <button name=")" onClick={b => this.props.onClick(b.target.name)}>)</button> 
               <button name="C" onClick={b => this.props.onClick(b.target.name)}>C</button> <br/>

               <button name="1" onClick={b => this.props.onClick(b.target.name)}>1</button> 
               <button name="2" onClick={b => this.props.onClick(b.target.name)}>2</button> 
               <button name="3" onClick={b => this.props.onClick(b.target.name)}>3</button> 
               <button name="+" onClick={b => this.props.onClick(b.target.name)}>+</button> <br/>

               <button name="4" onClick={b => this.props.onClick(b.target.name)}>4</button> 
               <button name="5" onClick={b => this.props.onClick(b.target.name)}>5</button> 
               <button name="6" onClick={b => this.props.onClick(b.target.name)}>6</button> 
               <button name="-" onClick={b => this.props.onClick(b.target.name)}>-</button> <br/>

               <button name="7" onClick={b => this.props.onClick(b.target.name)}>7</button> 
               <button name="8" onClick={b => this.props.onClick(b.target.name)}>8</button> 
               <button name="9" onClick={b => this.props.onClick(b.target.name)}>9</button> 
               <button name="*" onClick={b => this.props.onClick(b.target.name)}>x</button> <br/>

               <button name="" onClick={b => this.props.onClick(b.target.name)}></button> 
               <button name="0" onClick={b => this.props.onClick(b.target.name)}></button> 
               <button name="=" onClick={b => this.props.onClick(b.target.name)}></button> 
               <button name="/" onClick={b => this.props.onClick(b.target.name)}></button> <br/>

          
           </div>

       )
    }
}

export default MyKeyPad;