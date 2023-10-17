# Dollar to Real Converter

This project was developed as part of a public challenge proposed by a company. The goal was to create a web application that allows the conversion of dollar values to Brazilian real.

![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHeLad-qfHfQgVxpVelWFq_oO0Za6HKcS2O9tqx4_0NtTihCcmGjPLgOXPyl16CpI3aYhaarvr8nLjrQw5SRQFPUZP-aDnpdnDY2rDzdEH2ASkhDbq2_9Qf-qX9wnPTWAIMNazp9H4E4Txwvb4ln_28RQnwk2hAo2DsQg4SmlXi1Q9hHO09kNzq4mOnxp84kezszjZdtV8VlkcQWfp6M6TcdjnskywbxRbcBhCrFoohBfSrAwTgTFhLF0jpnCGHLckRAQ3n3aFKzbUK3qezK_4HzZLDv9nt55SLRQzNOHYtUkdVhHguzXAP4DT3SSoWyq1RqrDXn4zSgO91ZUjHIyetbZhzbtHwsHv1lRITugFCEdz5--EANJS5CbDbOEAJT1LllZGTNir6gC6Eq5Bf6nHjmUWk77dNgXBs5eNoGnJK3LUQhU2x5oZNPOHsyZw9vwpQ0anwRfoMjxa5tHCRNH4bB5vPnfyPVBKXS9kj693LC4_hqMUFWBGWfJFIy5BPLETqVKL5b5YD5nkBrSVnLl_Pq9-dxIFa-jlU3xtIsfATzs5RC7HT4c2LLjwCSEHDxcY0--ZGdf6OO_jAdCbGzJvCDhI33Ci_80W2qgn-gB-HMmJMovVKry33XK2VkhZgm0bX3-GVn8jDDUfI9kTYeY3P7ZDVADMXK6lyKIvDhw6KexaNNR-jcQObwAn2UIF7JN3NTcI2eHZ9TtLiHnVCccUP1cFMIKCnRQxPNZMT93z8LfoORucFhKp2gd1kohmu6wWzGqzYFQQ3k5bVb0ZpMG0GOyCm1yx9EZLjDjOKlniOeAGGiIlGQ1MsBVEGeRwF5suqw7YKs0pVOs7L_xmfslx2-vCaJ3bmysqGmSjii1R9qKar_Mu112QwQdhsMq8EAthVdvSzmQotIVaCeIQ_wp3whO8RBih0ekLJmWX1ZLqUPzq_BFyLFzUwVX0c=w1441-h828-s-no-gm?authuser=1)

## Overview
The Dollar to Real Converter application consists of two main steps:

Value Input for Conversion: In this step, the user can enter the dollar amount they wish to convert to Brazilian real.

 Display of Converted Values: After entering the desired amount, the application will fetch the current dollar exchange rate from a currency API and calculate the following values:

- Dollar exchange rate.
- Tax on Financial Operations (IOF).
- Total in dollars without tax.
- Total in dollars with tax.
- Total in Brazilian real without tax.
- Total in Brazilian real with tax.


## Requirements Met
To meet the challenge requirements, the following technologies and practices were implemented:

- Utilization of the specified layout design.
- Development of the application using the React library.
- Use of TypeScript to ensure typing and security.
- Implementation of an HTTP client with Axios to fetch the dollar - exchange rate from the currency API.
- Execution of unit tests to ensure component quality.
- Usage of the SWR library for data loading optimization.
- Utilization of the Styled-Components library to style components.
- Deployment of the application to a fast deployment platform (e.g., Vercel, Heroku, Netlify).


## API Reference

#### Used api to managed to get a dollar exchange rate

```http
  https://docs.awesomeapi.com.br/api-de-moedas
```


## Tech Stack

**Client:** JavaScript, React, Typescript , Styled Componentes

**Server:** HTTP com axios, testes unitários , react-query


## Conclusion

This project represents the successful completion of the challenge proposed by the company. The Dollar to Real Converter application demonstrates the use of modern technologies and best practices in web development. Its functionality is intuitive and meets the established requirements.
