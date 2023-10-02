import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    padding: 65px;

        /* Smaller Tablets */
@media (max-width: 730px) {
    
        padding: 20px 20px 40px 20px;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
    
}
    /* Cell phones */
@media (max-width: 480px) { 

        padding: 40px 20px 40px 20px;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    
}
`

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
    }

    span {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        font-size: 16px;
    }

    p {
        color: ${props => props.theme.colors.secondary};
        font-size: 14px;
        font-weight: 400;
    }

    /* Smaller Tablets */
@media (max-width: 730px) {

    span {
        font-size: 14px;
    }
    
    p {
        font-size: 12px;
    }
}


/* Cell phones */
@media (max-width: 480px) { 

    span {
        font-size: 14px;
    }
    
    p {
        font-size: 10px;
    }
}

/* Smaller Cell phones */
@media (max-width: 330px) { 
    
    span {
        font-size: 12px;
    }
    
    p {
        font-size: 10px;
    }
}
`