import {FC} from 'react';
import styles from './InputPassword.module.css';
import ClosedEye from '@/assets/svg/eyes/closedEyeIcon.svg';
import Eye from '@/assets/svg/eyes/eyeIcon.svg';

interface InputPasswordProps {
    flag: boolean;
    setFlag: (f: boolean) => void;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const InputPassword: FC<InputPasswordProps> = props => {
    return (
        <div className={styles.Password}>
            <input
                type={props.flag ? 'password' : 'text'}
                onChange={e => props.onChange(e.target.value)}
                value={props.value}
                className={styles.PasswordInput}
                placeholder={props.placeholder}
            />
            <button
                className={styles.PassButton}
                type='button'
                onClick={() => props.setFlag(!props.flag)}
            >
                {props.flag ?
                    <ClosedEye className={styles.PassIcon}/>
                    :
                    <Eye className={styles.PassIcon}/>
                }
            </button>
        </div>
    );
};

export default InputPassword;