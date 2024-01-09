export default function Title(props){
    
    if(props.small){
        return (
            <>
                <p>{props.principal}</p>
                <p>{props.secondary}</p>
            </>
        );
    }
    else{
        return (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.secondary}</h2>
            </>
        );
    }
}