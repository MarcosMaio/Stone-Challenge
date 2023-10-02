import styled from 'styled-components';


export const InputRadioCheckboxStyled = styled.div `
    display: flex;
    flex-direction: row;

    label {
        font-family: ${props => props.theme.fonts.fontStyle2};
        font-size: 16px;
        margin-left: 0.5em;
        color: ${props => props.theme.colors.tertiary};
        font-weight: 500;
}


    input[type="radio"]::after {
        width: 22px;
        height: 22px;
        border-radius: 24px;
        top: -8.5px;
        left: -6px;
        cursor: pointer;
        content: "";
        position: relative;
        display: inline-block;
        visibility: visible;
        background-color: ${props => props.theme.colors.white};
        border: 2px solid rgb(140, 156, 173);
}

    input[type="radio"]:checked::after {
        background-color: ${props => props.theme.colors.quaternary};
        border: 2px solid ${props => props.theme.colors.white};
        border-radius: 14px;
        width: 14px;
        height: 14px;
        z-index: 999;
        top: -33px;
        left: -2px;
        cursor: pointer;
    }

    input[type="radio"]:checked::before {
        width: 22px;
        height: 22px;
        border-radius: 24px;
        top: -8.5px;
        left: -6px;
        content: "";
        position: relative;
        display: inline-block;
        visibility: visible;
        z-index: 998;
        background-color: ${props => props.theme.colors.white};
        border: 2px solid ${props => props.theme.colors.quaternary};
    }

    /* Smaller Tablets */
@media (max-width: 730px) { 

    label {
        font-size: 14px;
    }

    input[type="radio"]:checked::after {
        width: 12px;
        height: 12px;
        top: -32px;
        left: -1px;
    }
}

/* Cell Phones */
@media (max-width: 480px) {

    input[type="radio"]:checked::after {
        width: 10px;
        height: 10px;
        top: -29px;
        left: -2px;
    }

    input[type="radio"]::after {
        width: 18px;
        height: 18px;
        top: -8.5px;
        left: -6px;
    }

    input[type="radio"]:checked::before {
        width: 18px;
        height: 18px;
        top: -8.5px;
        left: -6px;
    }
}

/* Cell Phones */
@media (max-width: 365px) {
    
    label {
        font-size: 12px;
    }

    input[type="radio"]:checked::after {
        width: 9px;
        height: 9px;
        top: -24px;
        left: 0.1px;
    }

    input[type="radio"]::after {
        width: 15px;
        height: 15px;
        top: -5px;
        left: -3px;
    }

    input[type="radio"]:checked::before {
        width: 15px;
        height: 15px;
        top: -5px;
        left: -3px;
    }
}
`