interface PersonProps{
    name: string,
    age?: number // '?' optional property
}

export default function Person(props: PersonProps){
    return(
        <div>
            <div>Name: {props.name}</div>
            <div>Age: {props.age ?? 'Uninformed'}</div>
        </div>
    );
}