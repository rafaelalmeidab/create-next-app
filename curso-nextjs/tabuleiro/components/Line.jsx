import Position from "./Position";
import styles from '../styles/Line.module.css'

export default function Line(props){
    return (
        <div className={styles.line}>
            <Position black={props.black}/>
            <Position black={!props.black}/>
            <Position black={props.black}/>
            <Position black={!props.black}/>
            <Position black={props.black}/>
            <Position black={!props.black}/>
            <Position black={props.black}/>
            <Position black={!props.black}/>
        </div>
    );
}