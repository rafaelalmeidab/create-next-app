import styles from "../styles/Position.module.css"

export default function Position(props){
    return(
        <div 
            style={{
                backgroundColor: props.black ? "#000" : "#fff"
            }}
            className={styles.position}>
        </div>
    );
}