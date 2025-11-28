import React, {FC, FormEvent, useEffect, useState} from 'react';
import styles from './LoginForm.module.css';
import {Link} from 'react-router-dom';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {useAuth} from '@/modules/auth/store/useAuth';
import Eye from '@/assets/svg/eyes/eyeIcon.svg';
import ClosedEye from '@/assets/svg/eyes/closedeyeIcon.svg';
import {useUser} from '@/store/useUser';
import {Pages} from '@/pages';
import InputPassword from '@/UI/inputPassword/InputPassword';

const LoginForm: FC = () => {
    const [userInput, setUserInput] = useState<LoginInput>({
        email: '', password: ''
    });
    const [passFlag, setPassFlag] = useState(true);

    const {login, isLoading, error, data} = useAuth();
    const {setUser} = useUser();

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login(userInput);
    };

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);

    return (
        <form
            onSubmit={e => submit(e)}
            className={styles.Form}
        >
            <div>
                <div className={styles.Title}>Login</div>
                <div>
                    <input
                        type='email'
                        onChange={e => setUserInput({...userInput, email: e.target.value})}
                        value={userInput.email}
                        className={styles.Input}
                        placeholder='Email'
                    />
                </div>
                <InputPassword
                    flag={passFlag}
                    setFlag={setPassFlag}
                    value={userInput.password}
                    onChange={v => setUserInput({...userInput, password: v})}
                />
                {error?.message &&
                    <div className={styles.Error}>
                        {error.message}
                    </div>
                }
                <button
                    className={styles.Button}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
                <div className={styles.PassText}>
                    <Link
                        to={Pages.AUTH_PASSWORD}
                        className={styles.Text}
                    >
                        I don't remember password
                    </Link>
                </div>
            </div>
            <Link
                to={Pages.AUTH_REGISTRATION}
                className={styles.Link}
            >
                Create account
            </Link>
        </form>
    );
};

export default LoginForm;