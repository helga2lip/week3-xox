import styles from './Field.module.css'

export const FieldLayout = (props) => {
    return <div className={styles.fieldLayout}>
        <div className={styles.fieldGrid}>
            {props.field.map((cell, index) => {
                return <div key={index} className={styles.fieldCell}>
                <button className={styles.fieldButton}>{cell}</button>
            </div>
            })}
            
        </div>
    </div>
}