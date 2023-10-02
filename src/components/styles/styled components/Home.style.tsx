import styled from 'styled-components';

export const HomeContainer = styled.div `
    width: 100%;
    display: flex;
    padding: 50px 65px 65px 65px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    /* Smaller Tablets */
@media (max-width: 730px) { 
        padding: 50px 55px 55px 55px;
        align-items: center;
}

/* Cell Phones */
@media (max-width: 480px) {
        gap: 35px;
}
`

export const ContainerInputConversion = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerTypePurchase = styled.div `
    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
        color: ${props => props.theme.colors.tertiary};
    }

    /* Smaller Tablets */
@media (max-width: 730px) { 

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
    }
}

    /* Cell Phones */
@media (max-width: 480px) {

    span {
        font-size: 14px;
    }
}

/* Cell Phones */
@media (max-width: 365px) {

    span {
        font-size: 12px;
    }
}
`

export const DivisionCheckbox = styled.div `
    display: flex;
    align-items: center;
    margin-top: 1.5em;
`

export const ButtonToConversion = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 149px;
    padding: 16px;
    gap: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.quaternary};
    font-weight: 500;
    color: ${props => props.theme.colors.white};

    /* Smaller Tablets */
@media (max-width: 730px) { 
    padding: 16px;
    gap: 16px;
    font-size: 14px;
    line-height: 24px;
}

/* Cell Phones */
@media (max-width: 480px) {
    gap: 10px;
    line-height: 24px;
    padding: 14px;
    font-size: 14px;
}

/* Cell Phones */
@media (max-width: 365px) { 
    gap: 10px;
    line-height: 24px;
    padding: 12px;
    font-size: 12px;
}
`

export const ButtonToGoBack = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 120px;
    padding: 16px;
    line-height: 24px;
    gap: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    background-color: ${props => props.theme.colors.white};
    font-weight: 500;
    color: ${props => props.theme.colors.tertiary};
    border: 1px solid rgb(215, 224, 235);
    box-shadow: rgba(13, 17, 27, 0.08) 0px 8px 4px; 

    /* Smaller Tablets */
@media (max-width: 730px) { 
    padding: 16px;
    gap: 16px;
    font-size: 14px;
    line-height: 24px;
}

/* Cell Phones */
@media (max-width: 480px) {
    gap: 10px;
    line-height: 24px;
    padding: 14px;
    font-size: 14px;
}

/* Cell Phones */
@media (max-width: 365px) { 
    gap: 10px;
    line-height: 24px;
    padding: 12px;
    font-size: 12px;
}
`

export const ContainerResultConversion = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 65px 65px 65px;
    flex-direction: column;
    align-items: flex-start;

    h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.fontStyle2};
    margin: 2em 0 1em 0;
}

/* Smaller Tablets */
@media (max-width: 730px) { 
    padding: 50px 55px 55px 55px;

    h2 {
        font-size: 18px;
    }
}

    /* Cell Phones */
@media (max-width: 480px) {
    
    h2 {
        font-size: 16px;
    }
}

/* Smaller Cell Phones */
@media (max-width: 365px) {
    padding: 50px 20px 65px 40px;
}
`

export const ConvertedValue = styled.span`
    font-size: 64px;
    font-weight: 500;
    color: rgba(0, 171, 99, 1);
    letter-spacing: 2px;


    /* Smaller Tablets */
@media (max-width: 730px) { 
    font-size: 55px;
}

/* Cell Phones */
@media (max-width: 480px) {
    font-size: 45px;
}

/* Smaller Cell Phones */
@media (max-width: 365px) {
    font-size: 40px;
}
`

export const DivisionResultInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2em;

    p {
    font-family: var(--font-style-1);
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(110, 126, 144, 1);
}

/* Smaller Tablets */
@media (max-width: 730px) { 
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2em;

    p {
    font-family: var(--font-style-1);
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(110, 126, 144, 1);
    }
}

/* Cell Phones */
@media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-top: 1em;
    
    p {
    font-family: var(--font-style-1);
    font-size: 12px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(110, 126, 144, 1);
    }
}

/* Smaller Cell Phones */
@media (max-width: 365px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-top: 1em;

    p {
    font-family: var(--font-style-1);
    font-size: 12px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(110, 126, 144, 1);
    }
}
`