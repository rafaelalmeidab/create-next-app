import { Component } from "react";

const btnStyleCSS = {
    width : "20px"
};

export default class Counter extends Component{

    state = {
        number : 20,
        number2 : this.props.initialValue,
        number3 : this.props.initialValue ?? 0,
        pass : this.props.pass ?? 10
    }       

    inc = () => {
        this.setState({
            number : this.state.number + this.state.pass
        });
    }

    dec = () => {
        this.setState({
            number : this.state.number - this.state.pass
        });
    }

    renderForm(){
        return(
            <>
                <input type="number" min={1} max={1000} value={this.state.pass} onChange={ev => this.setState({pass : +ev.target.value})} />
                <button style={btnStyleCSS} onClick={this.inc}>+</button>
                <button style={btnStyleCSS} onClick={this.dec}>-</button>
            </>
        );
    }

    render(){
        return(
            <div>
                <h1>Counter (using Class)</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        );
    }
}