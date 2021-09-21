import React, { useRef } from 'react';
import useOutsildeClick from '../../hooks/useOutsildeClick';
import MenuHexList from '../MenuHexList';
import styles from './MenuHex.module.css';

const MenuHex = ({ visible, setVisible, setColor, setColorFixed, colors }) => {

    const ref= useRef()

    const classes = [styles.menu]
    if (visible) {
        classes.push(styles.active)
    }

    useOutsildeClick(ref, () => setVisible())

    const handlerChangeColor = (color) => {
        setColor(color)
        setColorFixed(color)
        setVisible(false)
    }

    return (
        <div className={classes.join(' ')}>
            <div className={styles.menuContent} ref={ref}>
                <div className={styles.arrow}></div>
                <MenuHexList handlerChangeColor={handlerChangeColor} colors={colors} />
            </div>
        </div>
    )
}

export default MenuHex