
import { useContext } from 'react'
import styles from '../styles/pages/produtos.module.css'

import { ProdutoItem } from './ProdutoItem'
import { DataContext } from '../context/DataProvider'


export function Produtos () {
    const value = useContext(DataContext)
    const [produtos] = value.produtos
    
    return (
        <>
        
        <div className={styles.produtos}>
            {
              produtos.map(produto =>(
                <ProdutoItem
                key={produto.id}
                id={produto.id}
                title={produto.title}   
                price={produto.price}
                image={produto.image}
                creator={produto.creator}
                cantidad={produto.cantidad}
                
                />
              ))}
        </div>
        
        </>
        
    )
    
}