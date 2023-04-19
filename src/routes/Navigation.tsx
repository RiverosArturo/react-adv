import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../assets/react.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
    return (
        //Nos permite mostrar un mensaje o componente especial Cargando...
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo"/>
                        <ul>
                            {
                                // routes.map( route => (
                                routes.map( ({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink to={ to }
                                        className={({isActive}) => isActive ? 'nav-active' : '' } >
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                            {/* <li>
                                <NavLink to="/lazy1" className={({isActive}) => isActive ? 'nav-active' : '' } >Lazy1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : '' } >Lazy2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : '' } >Lazy3</NavLink>
                            </li> */}
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ to, path, Component}) => (
                                <Route 
                                    key={ to }
                                    path={ path } 
                                    element={ <Component /> } />
                            ))
                        }
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                        {/* <Route path="lazy1" element={ <LazyPage1 /> } />
                        <Route path="lazy2" element={ <LazyPage2 /> } />
                        <Route path="lazy3" element={ <LazyPage3 /> } />
                        <Route path="/*" element={ <Navigate to="/lazy1" replace /> } /> */}
                    </Routes>

                    
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
