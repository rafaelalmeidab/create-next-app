import { Component } from "react";
import Counter from "../../components/Counter";

export default class CounterPage extends Component{
    render(){
        return(
            <>
                <Counter initialValue={100} pass={25} />
                <Counter />
            </>
        );
    }
}