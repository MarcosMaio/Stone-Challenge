import styled from 'styled-components';

export const InputBoxStyled = styled.div `
    display: flex;
    flex-direction: column;
    width: fit-content;

    span {
    font-size: 18px;
    color: ${props => props.theme.colors.tertiary};
    font-weight: 500;
    margin-bottom: 0.5em;
}

    input {
        width: 168px;
        padding: 16px;
        color: ${props => props.theme.colors.tertiary};
        font-size: 16px;
        line-height: 24px;
        text-align: left;
        border: 1px solid rgb(215, 224, 235);
        border-radius: 4px;
        filter: drop-shadow(rgba(13, 17, 27, 0.08) 0px 8px 4px);
            ::placeholder {
                font-family: ${props => props.theme.fonts.fontStyle1};
        } 
}

        /* Smaller Tablets */
@media (max-width: 730px) { 
    span {
        font-size: 14px;
        margin-bottom: 0.5em;
    }

    input {
        width: 200px;
        padding: 16px;
        font-size: 14px;
    }
}

/* Cell Phones */
@media (max-width: 480px) {
    
    span {
        font-size: 14px;
    }
    
    input {
        width: 150px;
        padding: 14px;
    }
}

/* Cell Phones */
@media (max-width: 365px) {

    span {
        font-size: 12px;
    }

    input {
        width: 120px;
        padding: 10px;
    }
}
`
