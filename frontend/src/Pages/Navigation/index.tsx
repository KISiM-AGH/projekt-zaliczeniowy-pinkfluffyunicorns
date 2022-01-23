import {Link, useLocation} from "react-router-dom";
import React from "react";
import styles from "./Navigation.module.scss"
import {useCookies} from "react-cookie";
import {Container} from "@mantine/core";

const getActive = (path: string, target: string) => path === target ? styles.active : undefined

export const Navigation = () => {
    const [cookies] = useCookies(["isLogged"]);     // cookies to obiekt. Klucze to nazwy cookiesów

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
            {cookies.isLogged
                ? <li>
                    Jesteś zalogowany
                </li>
                : <>
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