import {Link, useLocation} from "react-router-dom";
import React from "react";
import styles from "./Navigation.module.scss"
import {useCookies} from "react-cookie";

const getActive = (path: string, target: string) => path === target ? styles.active : undefined

export const Navigation = () => {
    const [cookies] = useCookies();     // cookies to obiekt. Klucze to nazwy cookiesów

    const location = useLocation();
    const path = location.pathname;


    return (
        <nav className={styles.navigation}>
            <ul>
                {cookies.isLogged
                    ? <li>
                    Jesteś zalogowany
                    </li>
                    : <li className={getActive(path, '/login')}>
                        <Link to='/login'> Zaloguj się</Link>
                    </li>

                }
            </ul>
    {/*    <ul>*/}
    {/*        <li className={getActive(path, '/')}>*/}
    {/*<Link to="/">Info</Link>*/}
    {/*    </li>*/}
    {/*    <li className={getActive(path, '/books')}>*/}
    {/*<Link to="/books">Książki</Link>*/}
    {/*    </li>*/}

    {/*    <li className={getActive(path, '/books/add')}>*/}
    {/*<Link to="/books/add">Dodaj książkę</Link>*/}
    {/*</li>*/}

    {/*</ul>*/}
    {/*<span>{"Strona sklepu"}</span>*/}
    {/*<span>{cookies.isLogged && "Jesteś zalogowany!"}</span>*/}
    </nav>
)
}