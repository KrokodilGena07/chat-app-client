import React, {FC, FormEvent, useEffect, useState} from 'react';
import styles from './RegistrationForm.module.css';
import {useAuth} from '@/modules/auth/store/useAuth';
import {useUser} from '@/store/useUser';
import {Pages} from '@/pages';
import {Link} from 'react-router-dom';
import {RegistrationInput} from '@/modules/auth/models/RegistrationInput';
import Input from '@/UI/input/Input';
import InputPassword from '@/UI/inputPassword/InputPassword';

const RegistrationForm: FC = () => {
    const [userInput, setUserInput] = useState<RegistrationInput>({
        email: '', password: '', name: '', surname: ''
    });
    const [passFlag, setPassFlag] = useState(true);

    const {registration, isLoading, error, data} = useAuth();
    const {setUser} = useUser();

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registration(userInput);
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
                <div className={styles.Title}>Registration</div>
                <Input
                    value={userInput.name}
                    onChange={v => setUserInput({...userInput, name: v})}
                    className={styles.AuthInput}
                    placeholder='Name'
                />
                <Input
                    value={userInput.surname}
                    onChange={v => setUserInput({...userInput, surname: v})}
                    className={styles.AuthInput}
                    placeholder='Surname'
                />
                <Input
                    type='email'
                    value={userInput.email}
                    onChange={v => setUserInput({...userInput, email: v})}
                    className={styles.AuthInput}
                    placeholder='Email'
                />
                <InputPassword
                    flag={passFlag}
                    setFlag={setPassFlag}
                    value={userInput.password}
                    onChange={value => setUserInput({...userInput, password: value})}
                    placeholder='Password'
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
            </div>
            <Link
                to={Pages.AUTH_LOGIN}
                className={styles.Link}
            >
                Sign in
            </Link>
        </form>
    );
};

export default RegistrationForm;