import { Field } from "../Field/Field"
import { Information } from "../Information/Information"
import styles from './Game.module.css'

export const GameLayout = (props) => {
    return <div className={styles.gameLayout}>
        <Information />
        <Field field={props.field}/>
    </div>
}