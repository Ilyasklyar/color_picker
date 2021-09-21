import React from 'react'
import styles from './MenuHexList.module.css'

const MenuHexList = ({ colors, handlerChangeColor }) => {

    let listItem = colors.map(i =>
        <li key={Object.keys(i)} className={styles.listHexItem} onClick={() => handlerChangeColor(Object.values(i))}>
            <span>{Object.keys(i).toString().toUpperCase()}</span>
            <div style={{ backgroundColor: `${Object.values(i)}` }}></div>
        </li>)

    return (
        <ul>{listItem}</ul>
    )
}

export default MenuHexList