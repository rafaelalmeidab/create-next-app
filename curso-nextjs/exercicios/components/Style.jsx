export default function Style(props){

    const appliedClass = props.number >= 0 ? "blue" : "red";

    return (
        <div>
            <h1 style={{
                backgroundColor: props.number>=0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.right ? 'right' : 'left'
            }}>
                Text #1
            </h1>
            <h2 className={appliedClass}>
                Text #2
            </h2>
        </div>
    );
}