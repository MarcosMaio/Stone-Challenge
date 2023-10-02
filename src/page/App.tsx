import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import { DollarExchangeRateProvider } from '../contexts/DollarExchangeRate';
import API from '../hooks/useAPI';

function App() {
  return (
      <DollarExchangeRateProvider>
        <main>
            <API/>
            <Header/>
            <Home />
        </main>
      </DollarExchangeRateProvider>
  );
}

export default App;
