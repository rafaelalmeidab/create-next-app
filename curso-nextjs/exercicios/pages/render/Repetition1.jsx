export default function Repetition1(){

    const approvedList = [
        "Rafael",
        "João",
        "Maria",
        "Ana"
    ];

    function renderList(){
        return approvedList.map((name, index) => <li key={index}>{name}</li>);
    }

    return(
        <ul>
            {renderList()}
        </ul>
    );
}