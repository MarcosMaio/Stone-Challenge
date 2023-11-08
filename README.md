# Dollar to Real Converter

This project was developed as part of a public challenge proposed by a company. The goal was to create a web application that allows the conversion of dollar values to Brazilian real.

![site illustrato](https://tinypic.host/images/2023/11/05/mobile-3.png)


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
