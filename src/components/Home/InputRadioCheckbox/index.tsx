import React from 'react'
import { InputRadioCheckboxStyled } from '../../styles/styled components/SubStylesComponents/InputRadioCheckbox.style'

interface Props {
    checked: boolean,
    onChange: () => void,
    id: string,
    children?: string
}

export default function InputRadioCheckbox({checked, onChange, id , children} : Props) {
    return (
        <InputRadioCheckboxStyled>
            <input checked={checked} onChange={onChange} type='radio' id={id} />
            <label htmlFor={id}>{children}</label>
        </InputRadioCheckboxStyled>
    )
}
