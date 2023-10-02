import React from 'react';
import StyledLogo from '../styles/styled components/SubStylesComponents/Logo.style';
import { HeaderContainer, HeaderInfo } from '../styles/styled components/Header.style';
import { Division } from '../styles/styled components/SubStylesComponents/Division.style';

export default function Header() {

const getDataUser = new Date();

const optionsDate : Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month:'long',
    day: 'numeric',
};

const optionsHour: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC', 
};

const convertDate = getDataUser.toLocaleDateString('pt-BR', optionsDate);
const convertTime = getDataUser.toLocaleTimeString('pt-BR', optionsHour);

    return (
            <HeaderContainer data-testid={'header-container'}>
                <StyledLogo />
                <Division width="48px" />
                    <HeaderInfo>
                        <div>
                            <span data-testid={"current-date"}>
                                {convertDate}
                            </span>
                            <div style={{margin: '10px 20px 10px 20px'}}>|</div>
                            <span data-testid={"current-time"}>
                                {convertTime} UTC
                            </span>
                        </div>
                        <div>
                            <p>
                                Dados de câmbio disponibilizados pela Morningstar.
                            </p>
                        </div>
                    </HeaderInfo>
            </HeaderContainer>
    )
}
