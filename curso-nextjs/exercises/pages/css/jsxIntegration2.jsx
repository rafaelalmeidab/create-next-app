//Nao importei da _app.js
import styles from './jsxIntegration2.module.css';

export default function jsxIntegration2(){
    return(
        <>
            <div id={styles.integration}>
                <div className={styles.gray}>Text #1</div>
                <div className={styles.green}>Text #2</div>
                <div className={styles.blue}>Text #3</div>
            </div>
            <div id={styles.integration}>
                <div className={styles.gray}>____</div>
                <div className={styles.green}>____</div>
                <div className={styles.blue}>____</div>
            </div>
            
        </>
    );
}