import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;
//Sirve para tipar, es como una clase pero para tipar nuestro codigo
interface Route {
    to: string,
    path: string,
    // Component: () => JSX.Element,
    // Component: React.LazyExoticComponent<() => JSX.Element> | () => JSX.Element,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}
// con /*webpackChunkName: "nombreChunk"*/ cambiamos el nombre del chunk que sale en nuestro Network
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        //Lo que va en el NavLink
        to: '/lazy1',
        //Lo que va en Route
        path: 'lazy1',
        //El componente que utilizamos para esta ruta
        Component: Lazy1,
        //Nombre que aparecerá en nuestro menú
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
];