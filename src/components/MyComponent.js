import React, {Component} from "react";

class MyComponent extends Component {

    render(){
        let {result, current, value} = this.props;
        return (
            <div className="result">
                <h3>{value}</h3>
                <p>{result === "" ? Number(current).toLocaleString("en-US"): Number(result).toLocaleString("en-US")}</p>
            </div>
            );
    }


}

export default MyComponent;