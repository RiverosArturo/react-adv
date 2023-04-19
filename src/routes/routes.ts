import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
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
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'));
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        //CON LAZYLOAD:
        //tenemos que poner el /* para las rutas hijas y para navegar nuestra ruta sera /lazyload para mantener la ruta activa en el Navlink
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        //SIN LAZYLOAD:
        //Lo que va en el NavLink
        to: '/no-lazy',
        //Lo que va en Route
        path: 'no-lazy',
        //El componente que utilizamos para esta ruta
        Component: NoLazy,
        //Nombre que aparecerá en nuestro menú
        name: 'No Lazy'
    }
];