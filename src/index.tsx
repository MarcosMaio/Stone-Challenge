import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import { GlobalStyle } from './components/styles/GlobalStyled';
import { Theme } from './components/styles/Theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
      <ThemeProvider theme={Theme} >
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
);
