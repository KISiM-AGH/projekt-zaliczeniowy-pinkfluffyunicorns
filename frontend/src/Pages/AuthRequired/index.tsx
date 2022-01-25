import React, {FunctionComponent, ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {useCookies} from "@react-smart/react-cookie-service";

interface Props {
    children: ReactElement;
}

export const AuthRequired: FunctionComponent<Props> = ({ children }) => {
    const { check } = useCookies();

    return check('isLogged') ? children : <Navigate to="/" />;
};

export const OnlyAdminAccess: FunctionComponent<Props> = ({ children }) => {
    const { check } = useCookies();

    return check('isAdmin') ? children : <Navigate to="/" />;
};