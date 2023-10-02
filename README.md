# Dollar to Real Converter

This project was developed as part of a public challenge proposed by a company. The goal was to create a web application that allows the conversion of dollar values to Brazilian real.

![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHfPBQSb5V-ty-LWHpefp76u6oJzvP-zz3FkaRp1aKQl0-9tYu6SN1kK_edpeTdI-QLCGHJuAO_P9884IOnwA0zZ4KDZJFttVFVaXz4Mlu66DeCBKKP3jKCes6Znacb8X6rkSaFfDyGNGzhcjMazAKAOVB0pRFF2R-DlzGbhl4i8TUkWZ9-OVoSnN1VB08vWLeS2i-YwcyZFwXVLEIF3bml0TTxSRetPQg5TJEock3NlXY51f8b121wIsTlWOJ96u6q8LmOK6yNiRdCiqCo077Ot6xiqqYq173xFDzc3lBSiAKl531h1GfmU7nht9h1qMiCLE0Paa1uTfWtTYlBDJQPctlH26zWysC8mMQh0IfZQoLmDSUPlh6WxdY_x4-PVeWoCNzQgXeRB3n_mDGtbOK2IOdRwJtf2F6DdK3NMTm8ZG1mosiuf-OZQuN780rRs_t0kyywSBLL0Oc8EzAb9p97w5cb7x3YNTPejQDyepGbm0K72TN1uR7wh5bfxdL20kW067sXsscGSHWz2u4HbzPbNEppCAzb5om963bMPo86387tNaHjVgyuF4UaOZa1xBxqxGNq2p6DfgeQNVFjAMkASwDHZb8wGb4zZpA6DfBkZx-9NuMpycbuEkd9Qecp8SqYnRZrVZm5NG0_VwPTXVBn670EpPSCHNxuMVKPv3_Wz6qkiKAzBPn4fsG0_byYYdrvr2Vv_nmoDEeGTBDFYXlHKlN5z1z_7ob20MLn6MCY6H1F4awJYdyvGBG3WSqYgrznqmfRts1tJW1g4fm1W1zMwe8l9-MRuBJfC-jjDKkJthP2iu1c5AcPH5cUiWdUSmxTkEQBSikbGPhH0UVs73PP_cj1nB7YTdB0-bar3Do3qwwug05s7BB9lP3VzaEMAIfik_gcvNoYE7I_zVykQ5BM-mjfGC8d5B5CRN6Bih0mI1grCK5YNNgPHSw=w1441-h828-s-no?authuser=1)

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
