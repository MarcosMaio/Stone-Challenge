import React, { useState } from 'react';
import transferIcon from './img/Transfer.svg'
import leftArrow from './img/arrow-left.svg'
import Decimal from 'decimal.js';
import {HomeContainer,
        ContainerInputConversion,
        ContainerTypePurchase,
        DivisionCheckbox, 
        ButtonToConversion, 
        ButtonToGoBack,
        ContainerResultConversion,
        ConvertedValue, 
        DivisionResultInfo
        } from '../styles/styled components/Home.style';
import { Division } from '../styles/styled components/SubStylesComponents/Division.style';
import InputBox from './InputBox';
import InputRadioCheckbox from './InputRadioCheckbox';
import { useDollarExchangeRate } from '../../contexts/DollarExchangeRate';



export default function Home() {
    const { dollarExchangeRate } = useDollarExchangeRate();
    const [inputValueDollar, setInputValueDollar] = useState<string>('');
    const [inputValueTax, setInputValueTax] = useState<string>('');
    const [isCheckedMoneyRadio, setIsCheckedMoneyRadio] = useState<boolean>(true);
    const [isCheckedCreditCardRadio, setIsCheckedCreditCardRadio] = useState<boolean>(false);
    const [isButtonDisabled, setIsbuttonDisabled] = useState<boolean>(true);
    const [showConversionToReal, setShowConversionToReal] = useState<boolean>(false);
    const [convertedValue, setConvertedValue] = useState<string | undefined>(undefined);
    

    const handleRadioSelectedToMoney = () => {
        setIsCheckedMoneyRadio(true);
        setIsCheckedCreditCardRadio(false);
    };

    const handleRadioSelectedToCreditCard = () => {
        setIsCheckedCreditCardRadio(true);
        setIsCheckedMoneyRadio(false);
    };

    const getInputValueDollar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValueDollar = e.target.value.replace(/[^\d]/g, '').replace(/^0+/, '');

        if (sanitizedValueDollar === '' || sanitizedValueDollar === '0') {
        setInputValueDollar('');
        setIsbuttonDisabled(true);
        } else {
        setIsbuttonDisabled(false);
        const formattedValueDollar = `$${sanitizedValueDollar.slice(0, -2)}.${sanitizedValueDollar.slice(-2)}`;
        setInputValueDollar(formattedValueDollar);
        }
    };

    const getInputValueTax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValueTax = e.target.value.replace(/[^\d.%]/g, '');

        if (sanitizedValueTax === '' || sanitizedValueTax === '0') {
        setInputValueTax('');
        } else {
        const formattedValueTax = sanitizedValueTax.replace('%', '');
        setInputValueTax(`%${formattedValueTax}`);
        }
    };

    const PreviusPageConversion = () => {
        setShowConversionToReal(false);
        setInputValueDollar('');
        setInputValueTax('');
        setIsbuttonDisabled(true);
    }

    const getConversionDollar = () => {
        const inputValueDollarAsNumber = new Decimal(inputValueDollar.replace('$', '').replace(',', ''));
        const inputRadioTaxMoney = new Decimal(1.1/100);
        const inputRadioTaxCard = new Decimal(6.4/100); 
        const dollarExchangeRateDecimal = new Decimal(dollarExchangeRate);
        const dollarExchangeRateWithMoneyTax = dollarExchangeRateDecimal.plus(dollarExchangeRateDecimal.times(inputRadioTaxMoney));
        const dollarExchangeRateWithCreditCard = dollarExchangeRateDecimal.plus(dollarExchangeRateDecimal.times(inputRadioTaxCard));
        let conversionToReal: Decimal | undefined;
        if (!inputValueDollarAsNumber.isNaN()) {
            if (isCheckedMoneyRadio === true) {
                let DollarAndTaxConversion: Decimal;
                    if (inputValueTax !== '') {
                        const inputValueTaxAsNumber = new Decimal(inputValueTax.replace('%', '').replace(',', ''));
                        DollarAndTaxConversion = inputValueDollarAsNumber.plus(inputValueDollarAsNumber.times(inputValueTaxAsNumber.dividedBy(100)));
                    } else {
                        setInputValueTax('0%');
                        DollarAndTaxConversion = inputValueDollarAsNumber;
                    }
                    conversionToReal = DollarAndTaxConversion.times(dollarExchangeRateWithMoneyTax);
                    } else if (isCheckedCreditCardRadio === true) {
                        let DollarAndTaxConversion: Decimal;
                            if (inputValueTax !== '') {
                                const inputValueTaxAsNumber = new Decimal(inputValueTax.replace('%', '').replace(',', ''));
                                DollarAndTaxConversion = inputValueDollarAsNumber.plus(inputValueDollarAsNumber.times(inputValueTaxAsNumber.dividedBy(100)));
                                    } else {
                                        setInputValueTax('0%');
                                        DollarAndTaxConversion = inputValueDollarAsNumber;
                                    }
                                        conversionToReal = DollarAndTaxConversion.times(dollarExchangeRateWithCreditCard);
                                    }
                                        } else {
                                            console.log('error');
                                        }
                                            if (conversionToReal !== undefined) {
                                                setShowConversionToReal(true);
                                                setConvertedValue(conversionToReal.toFixed(2).toString());
                                            }
                                        };

    return (
            <>
                {!showConversionToReal ? (
                    <HomeContainer data-testid={'home-container'}>
                        <ContainerInputConversion>
                                <InputBox  
                                value={inputValueDollar}
                                onChange={getInputValueDollar}
                                placeholder={'$0.00'}
                                children={'Dólar'}
                                />
                                <Division width='24px'/>    
                                <InputBox  
                                value={inputValueTax}
                                onChange={getInputValueTax}
                                placeholder={'%0.0'}
                                children={'Taxa do Estado'}
                                />
                        </ContainerInputConversion>

                        <ContainerTypePurchase>
                            <span>Tipo de compra</span>
                                <DivisionCheckbox>
                                    <InputRadioCheckbox 
                                        checked={isCheckedMoneyRadio} 
                                        onChange={handleRadioSelectedToMoney} 
                                        id={'radioDinheiro'} 
                                        children={'Dinheiro'}
                                    />
                                    <Division width='24px'/> 

                                    <InputRadioCheckbox 
                                        checked={isCheckedCreditCardRadio} 
                                        onChange={handleRadioSelectedToCreditCard} 
                                        id={'radioCartao'} 
                                        children={'Cartão'}
                                    />
                                </DivisionCheckbox>
                        </ContainerTypePurchase>

                        <div>
                            <ButtonToConversion onClick={getConversionDollar} style={{backgroundColor: !isButtonDisabled ? 'rgba(0, 171, 99, 1)' : '#8C9CAD'}}  disabled={isButtonDisabled ? true : false}>
                                <img src={transferIcon} alt='' />
                                Converter
                            </ButtonToConversion>                       
                        </div>
                    </HomeContainer>
                    ) : (
                        <ContainerResultConversion data-testid="result-conversion">
                            <ButtonToGoBack onClick={PreviusPageConversion}> 
                                <img src={leftArrow} alt=''/> 
                                Voltar
                            </ButtonToGoBack>
                            <h2>O resultado do cálculo é</h2>
                            <ConvertedValue>R$ {convertedValue}</ConvertedValue>
                            <DivisionResultInfo>
                                {isCheckedMoneyRadio && (
                                    <p>Compra no dinheiro e taxa de {parseFloat(inputValueTax.replace('%', '').replace(',', ''))}%</p>
                                )}
                                {isCheckedCreditCardRadio && (
                                    <p>Compra no cartão e taxa de {parseFloat(inputValueTax.replace('%', '').replace(',', ''))}%</p>
                                )}
                                <p>Cotação do dólar: $1,00 = {parseFloat(dollarExchangeRate).toFixed(2)}</p>                    
                            </DivisionResultInfo>                  
                        </ContainerResultConversion>
                    )}
        </>
        );
    }
