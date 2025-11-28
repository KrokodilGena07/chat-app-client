import {FC, HTMLInputTypeAttribute} from 'react';
import styles from './Input.module.css';

interface InputProps {
    type?: HTMLInputTypeAttribute;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    ref?: any;
    onMouseUp?: () => any;
}

const Input: FC<InputProps> = props => {
    return (
        <input
            type={props.type ?? 'text'}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            className={`${styles.Input} ${props.className ?? ''}`}
            placeholder={props.placeholder}
            ref={props.ref}
            onMouseUp={props.onMouseUp}
        />
    );
};

export default Input;