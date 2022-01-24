import {Link, useLocation} from "react-router-dom";
import React from "react";
import styles from "./Navigation.module.scss"
import {useCookies} from "@react-smart/react-cookie-service";


import {Container} from "@mantine/core";

const getActive = (path: string, target: string) => path === target ? styles.active : undefined

export const Navigation = () => {
    const { check } = useCookies();     // cookies to obiekt. Klucze to nazwy cookiesów

    const location = useLocation();
    const path = location.pathname;


    return (
    //     <nav className={styles.navigation}>
    //         <ul>
    //             {cookies.isLogged
    //                 ? <li>
    //                 Jesteś zalogowany
    //                 </li>
    //                 : <li className={getActive(path, '/login')}>
    //                     <Link to='/login'> Zaloguj się</Link>
    //                 </li>
    //
    //             }
    //         </ul>
    // </nav>
    <nav className={styles.navigation}>
        <ul>
            {check('isLogged')
                ? <>
                    <li className={getActive(path, '/')}>
                        <Link to='/'>Strona główna</Link>
                    </li>
                    <li className={getActive(path, '/cart')}>
                        <Link to='/cart'>Koszyk</Link>
                    </li>
                    <li className={getActive(path, '/logout')}>
                        <Link to='/logout'> Wyloguj się </Link>
                    </li>
                </>
                : <>
                    <li className={getActive(path, '/')}>
                        <Link to='/'>Strona główna</Link>
                    </li>
                    <li className={getActive(path, '/login')}>
                        <Link to='/login'> Zaloguj się</Link>
                    </li>
                    <li className={getActive(path, '/register')}>
                        <Link to='/register'> Zarejestruj się </Link>
                    </li>
                </>



            }
        </ul>
    </nav>
)
}