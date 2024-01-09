export default function OnlyEven(props){
    const evenNumber = props.number % 2 === 0;;

    return evenNumber ? <div><span>{props.number}</span></div> : null;
}