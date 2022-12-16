import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'



export function Menu () {
    return (
        <>
        <div className={styles.containerMenu}>
            <div>
            <Link className={styles.logoMenu} to="/">Mãos de Mães</Link>
            
            </div>
        
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
        
            </li>
            
            <li className={styles.menuItem}>
                <Link className={styles.menuLink} to="/produtos">Produtos</Link>
            </li>
            
            <li className={styles.menuItem}>
                <Link className={styles.menuLink} to="/sobrenos">Sobre nós</Link>
            </li>
            <li className={styles.menuItem}>
                <Link className={styles.menuLink} to="/maes">Mães</Link>
            </li>
            <li className={styles.menuItem}>
                <Link className={styles.menuLink} to="/contato">Contato</Link>
            </li>                   
        </ul>
        <button className={styles.buttonWsp}>
        <box-icon type='logo' name='whatsapp' size='35px' color='white'></box-icon>
        </button>
        </div>
        </> 
    
    )
}