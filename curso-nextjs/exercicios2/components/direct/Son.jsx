export default function Son(props){
    return(
        <div style={{
                display : "flex",
                alignItems  : "center"
            }}>
            <h3>{props.name}</h3>
            <h2>{props.familyName}</h2>
        </div>
    );
}