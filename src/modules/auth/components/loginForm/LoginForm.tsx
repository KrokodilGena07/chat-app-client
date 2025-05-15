import React, {FC, FormEvent, useEffect, useState} from 'react';
import styles from './LoginForm.module.css';
import {data, Link} from 'react-router-dom';
import {Pages} from '@/router';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {useAuth} from '@/modules/auth/store/useAuth';
import Eye from '@/assets/svg/eyes/eyeIcon.svg';
import ClosedEye from '@/assets/svg/eyes/closedeyeIcon.svg';
import {useUser} from '@/store/useUser';

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
                <div className={styles.Password}>
                    <input
                        type={passFlag ? 'password' : 'text'}
                        onChange={e => setUserInput({...userInput, password: e.target.value})}
                        value={userInput.password}
                        className={styles.PasswordInput}
                        placeholder='Password'
                    />
                    <button
                        className={styles.PassButton}
                        type='button'
                        onClick={() => setPassFlag(!passFlag)}
                    >
                        {passFlag ?
                            <ClosedEye className={styles.PassIcon}/>
                            :
                            <Eye className={styles.PassIcon}/>
                        }
                    </button>
                </div>
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