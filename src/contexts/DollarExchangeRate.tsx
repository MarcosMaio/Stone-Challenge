import React, { createContext, useContext, useState } from 'react';

type DollarExchangeRateContextType = {
    dollarExchangeRate: string
    setDollarExchangeRate: React.Dispatch<React.SetStateAction<string>>;
}

const DollarExchangeRateContext = createContext<DollarExchangeRateContextType | undefined>(undefined);

type DollarExchangeRateProviderProps = {
    children: React.ReactNode;
}

export function DollarExchangeRateProvider({ children } : DollarExchangeRateProviderProps) {
    const [dollarExchangeRate, setDollarExchangeRate] = useState<string>('');

    return (
        <DollarExchangeRateContext.Provider value={{ dollarExchangeRate , setDollarExchangeRate}}>
            {children}
        </DollarExchangeRateContext.Provider>
    );
}

export function useDollarExchangeRate() {
    const context = useContext(DollarExchangeRateContext);
        if(!context) {
            throw new Error('useCount must be used within a CountProvider');
        }
        return context;
}