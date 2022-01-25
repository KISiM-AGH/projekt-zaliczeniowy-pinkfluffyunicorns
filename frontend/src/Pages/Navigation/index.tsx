import {Link, useLocation} from "react-router-dom";
import React from "react";
import styles from "./Navigation.module.scss"
import {useCookies} from "@react-smart/react-cookie-service";


const getActive = (path: string, target: string) => path === target ? styles.active : undefined

export const Navigation = () => {
    const { check } = useCookies();

    const location = useLocation();
    const path = location.pathname;


    return (
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
                    {check('isAdmin') &&
                        <li className={getActive(path, '/adminPanel')}>
                            <Link to='/adminPanel'>AdminPanel</Link>
                        </li>}
                    <li data-e2e="logout" className={getActive(path, '/logout')}>
                        <Link to='/logout'> Wyloguj się </Link>
                    </li>
                </>
                : <>
                    <li className={getActive(path, '/')}>
                        <Link to='/'>Strona główna</Link>
                    </li>
                    <li data-e2e="login" className={getActive(path, '/login')}>
                        <Link to='/login'> Zaloguj się</Link>
                    </li>
                    <li data-e2e="register" className={getActive(path, '/register')}>
                        <Link to='/register'> Zarejestruj się </Link>
                    </li>
                </>
            }
        </ul>
    </nav>
)
}