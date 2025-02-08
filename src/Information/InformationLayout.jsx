import styles from './Information.module.css'

export const InformationLayout = () => {
    return <div className={styles.informationLayout}>
            <div className={styles.info}>кто ходит</div>
            <button className={styles.startButton}>Начать заново</button>
    </div>
}