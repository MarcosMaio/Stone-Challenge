# Dollar to Real Converter

This project was developed as part of a public challenge proposed by a company. The goal was to create a web application that allows the conversion of dollar values to Brazilian real.

![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHdt0nSRwJpCsabXRrKpjVML8OTm0TpLcjGWLKRFJx-YbzeqMQl2dqTGfmE3wFJU-UlO0b1CpDFMm_B29ZaBEcQyDNKH7YmQeHVWEqrsFLy8h2dRjtX1g5ogn65Ee4lpzcTRez8LPkexzSYh40Xt_6EriDVhCDfup1o1NZkF1Y9wpJWeke6479XAXFUomjwWL15r1Pks1ah6cHdunUlHNKv2IqwO-fT_moXE76LGoaxq2S5EPXNrQNa4jI2gPtq1TFtAYG-VwmRYe_o_-QjzULaKvDNYYNLxXTg17nmKcXKIoZbf9ja9I0CJj_fFAzHHOlc4BQR_5w-NJPpAu3r2AVADZ1IlGBVYzZh8bz_AD3CM6IXOt9_biA--QB3jQRfcC6X-4aNrLWT3o2fTjrD8xUeiZ98cPhmdXTx_NnlyNZL7qNwioJCk4xjPXC-MUUi4XFkFzuDdQpkXQ1TF1mpMBTynfj1EIfcBdCZhi694lNqJp29UBJbuu6z_DmD8UIi-IHvBAb7Ax4jiCvOqBuROAiizugYzW9rhiRpwehohxXI-Q07iSE3sK2cZkmTKtCRq9wMMWUIfax7uou-0UGdKGHn1C8FmjwAbOtxVfgTi-fH3aZGsO6PELuZ4PzigT6fAi8T3rtJswaiS29dkyAKFWE-77wCY4AxXYzN6COiZEtovefTEPS2uAMIZqlJizxoQIxetiG1Qu1cY8LGRE-W98E6nc-e94d1vLXJbFEXYPGeXBuUU80C17MltHMi8nopD7aA2PGE4rlbG464YEe9SDDbCeYzy7PWuV3b39TW5q4nzgaAhWfFhrLlZwAM8t7-T7rdim-rtEEKoq7bVKccJKtYg_klR7Lp0uLIuEW6SLBuhgSdQjkMTAVyrBmrslAWUAMmHFnysSZxipENi2LVYdXcares2hMde-zrTmAugduwp_br3RCq2eWvYqQ=w1441-h828-s-no?authuser=1)

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
