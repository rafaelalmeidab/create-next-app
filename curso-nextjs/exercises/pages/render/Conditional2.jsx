import If from "@/components/If";
import OnlyEven from "@/components/OnlyEven";

export default function Conditional2(){
    const number = 3;
    return(
        <div>
            <If test={number % 2 === 0}>
                <h1>Number {number} is even</h1>
            </If>
            <If test={number % 2 > 0}>
                <h1>Number {number} is odd</h1>
            </If>
        </div>
    );
}