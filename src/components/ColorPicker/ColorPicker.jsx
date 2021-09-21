import React, { useState } from 'react';
import MenuHex from '../MenuHex';
import MenuRgb from '../MenuRgb';
import styles from './ColorPicker.module.css'

const ColorPicker = ({ value, onChange, colors }) => {

    const [menuHex, setMenuHex] = useState(false)
    const [menuRgb, setMenuRgb] = useState(false)
    const [color, setColor] = useState('#FFCC33')

    return (
        <div className={styles.wrapper}>
            <div className={styles.colorCode}>{color}</div>
            <div className={styles.rgbBtn} onClick={() => setMenuRgb(true)}>
                <div className={styles.rgbRect} style={{ backgroundColor: `${color}` }}></div>
            </div>
            <div className={styles.hexBtn} onClick={() => setMenuHex(true)}>
                <div className={styles.dropDownArrow}></div>
            </div>
            <MenuHex
                visible={menuHex}
                setVisible={setMenuHex}
                setColor={setColor}
                setColorFixed={onChange}
                colors={colors}
            />
            <MenuRgb
                visible={menuRgb}
                setVisible={setMenuRgb}
                setColor={setColor}
                setColorFixed={onChange}
                colorFixed={value}
            />
        </div>
    )
}

export default ColorPicker