import React, {FC, useMemo} from 'react';
import styles from './Form.module.css';
import {useLocation} from 'react-router-dom';
import {Pages} from '@/pages';
import RegistrationForm from '@/modules/auth/components/registrationForm/RegistrationForm';
import PasswordForm from '@/modules/auth/components/passwordForm/PasswordForm';
import LoginForm from '@/modules/auth/components/loginForm/LoginForm';

export const Form: FC = () => {
    const location = useLocation();

    const form = useMemo(() => {
        switch (location.pathname) {
            case Pages.AUTH_REGISTRATION: return <RegistrationForm/>;
            case Pages.AUTH_PASSWORD: return <PasswordForm/>;
            default: return <LoginForm/>;
        }
    }, [location.pathname]);

    return (
        <div className={styles.Form}>
            {form}
        </div>
    );
};