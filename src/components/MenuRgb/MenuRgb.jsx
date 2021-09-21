import React, { useEffect, useRef, useState } from 'react';
import useOutsildeClick from '../../hooks/useOutsildeClick';
import { convertorToHex, convertorToRgb } from '../../utils/convertor';
import MyButton from '../ui/button';
import styles from './MenuRgb.module.css';

const MenuRgb = ({ visible, setVisible, setColor, setColorFixed, colorFixed }) => {

    const ref = useRef()
    const [redRgb, setRedRgb] = useState(0)
    const [greenRgb, setGreenRgb] = useState(0)
    const [blueRgb, setBlueRgb] = useState(0)

    const classes = [styles.menu]
    if (visible) {
        classes.push(styles.active)
    }

    useOutsildeClick(ref, () => setVisible())

    useEffect(() => {
        let [red, green, blue] = convertorToRgb(colorFixed)
        setRedRgb(red)
        setGreenRgb(green)
        setBlueRgb(blue)
    }, [visible, colorFixed])

    useEffect(() => {
        setColor(convertorToHex([redRgb, greenRgb, blueRgb]))
    }, [redRgb, greenRgb, blueRgb, setColor])

    const handlerColorRgb = (e, color) => {
        if (color === 'red') setRedRgb(e.target.value)
        if (color === 'green') setGreenRgb(e.target.value)
        if (color === 'blue') setBlueRgb(e.target.value)
    }

    const handlerCancel = () => {
        setColor(colorFixed)
        setVisible(false)
    }
    const handlerlOk = () => {
        setColorFixed(convertorToHex([redRgb, greenRgb, blueRgb]))
        setVisible(false)
    }

    return (
        <div className={classes.join(' ')} ref={ref}>
            <div className={styles.menuContent} onClick={(e) => e.stopPropagation()} >
                <div className={styles.arrow}></div>
                <div className={styles.inputBox}>
                    <span>R</span>
                    <input type="range" value={redRgb} min="0" max="255" className={styles.sliderRed} onChange={(e) => handlerColorRgb(e, 'red')} />
                </div>
                <div className={styles.inputBox}>
                    <span>G</span>
                    <input type="range" value={greenRgb} min="0" max="255" className={styles.sliderGreen} onChange={(e) => handlerColorRgb(e, 'green')} />
                </div>
                <div className={styles.inputBox}>
                    <span>B</span>
                    <input type="range" value={blueRgb} min="0" max="255" className={styles.sliderBlue} onChange={(e) => handlerColorRgb(e, 'blue')} />
                </div>
                <div className={styles.btnBox}>
                    <MyButton classBtn={'btnGrey'} onClick={() => handlerCancel()}>Cancel</MyButton>
                    <MyButton classBtn={'btnGreen'} onClick={() => handlerlOk()}>ok</MyButton>
                </div>
            </div>
        </div>
    )
}

export default MenuRgb;