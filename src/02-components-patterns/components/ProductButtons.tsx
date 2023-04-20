import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: (value: number) => void;
// }

// export const ProductButtons = ( { counter, increaseBy }:ProductButtonsProps ) => {
export const ProductButtons = () => {

    //Heredar al hijo
    const { increaseBy, counter } =useContext( ProductContext );
    return (
        <div className={ styles.buttonsContainer }>
            <button 
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>
            <div className={ styles.countLabel }> { counter } </div>
            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    )
}