import styles from '../styles/components/header.module.css'

export function Header (props) {
    return (
        <div>
            <h1 className={styles.titleHeader}>{props.title}</h1>
            
        </div>
    )
}