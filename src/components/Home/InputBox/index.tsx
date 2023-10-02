import React from 'react';
import { InputBoxStyled } from '../../styles/styled components/SubStylesComponents/InputBox.style';

interface Props {
    value: string ,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void ,
    children?: string,
    placeholder: string
}

const InputBox = ({ value, onChange, children, placeholder } : Props) => {
    return (
        <InputBoxStyled>
            <span>{children}</span>
            <input value={value} onChange={onChange} placeholder={placeholder} />
        </InputBoxStyled>
    );
};

export default InputBox;