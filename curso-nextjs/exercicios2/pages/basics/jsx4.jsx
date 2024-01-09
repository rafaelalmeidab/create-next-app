export default function jsx4(){
    const subtitle = "I'm on JS!";

    return(
        <div>
            <h1>JS and JSX Integration</h1>
            <h2>{subtitle}</h2>
            <h3>{3 * 3}</h3>
            <h3>3 * 3</h3>
            <h4>{Math.max(2, 45)}</h4>
            <h5>{between(23, 1, 22)}</h5>
        </div>
    );
}

function between(value, min, max){
    if(value >= min && value<=max){
        return "Yes";
    }
    else{
        return "No";
    }
}