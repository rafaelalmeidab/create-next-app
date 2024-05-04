export default function list(){
    return(
        <div>
            <h1>Span List</h1>
            <h3>{spanList(20)}</h3>
        </div>
    );
}

function spanList(cont=10){
    var content = [], i = 1;
    while(i<=cont){
        if(i!=cont){content.push(<span>{i},</span>);}
        else{content.push(<span>{i}</span>);}
        i++;
    };
    return content;
}