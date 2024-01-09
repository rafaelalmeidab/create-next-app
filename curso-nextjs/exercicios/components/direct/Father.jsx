import Son from "./Son";

export default function Father(props){
    return(
        <div>
            <Son name="Rafael" familyName={props.familyName}/>
            <Son {...props} name="Samuel" />

        </div>
    );
}