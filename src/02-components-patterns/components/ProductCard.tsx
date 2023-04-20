import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';




//Heredar valores a los hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

    // console.log( styles );
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}

