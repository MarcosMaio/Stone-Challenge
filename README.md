# Dollar to Real Converter

This project was developed as part of a public challenge proposed by a company. The goal was to create a web application that allows the conversion of dollar values to Brazilian real.

![site illustrato](https://lh3.googleusercontent.com/pw/ADCreHcO71_vLH4tg9ptMdyR9BBWWpdUxYso9kUmnDCNRfbU6skQW36Mk68-G8QuU99kN5mMM9EmsnyWEY9ZFQmcNvHfZ0si6Hpzy7oDQpDiO43XuIca2WWexkNPn3fBaNjtzFXzH-KBb3j2_fASCiHV0IqsWa1Ouhy6cEkTMO83Y382LEyNNi7ekrcldZF_OBtQ1qGHorxInWFnwZ71OPMRLTijTGYA6G3ETYazhYZ0Hjsnqrkgj1icRbBpTf9-FEWkJq283eYc_yMrownOngI9ZMBWl6Go3cxcFNPHfCF8J-8bLcG16FB9NJjvFq19iIG0qlYQzk3i1l-6_L2s47U7YxznxVGQRJzRmCarpWRXoX2cnTFuVwjbqfjOgXQV191b33oDSEbyPx8dWJneH2uSrdWmog5NwDz5ZggcIr-0W837Upz2xnFdNp2w1XgadbbK3pEAuVLfxpRgvviF9X8eP6_PnPcNW8nMESqXT2EmD1s3-HMt1IZh5gMKQWS4EUcMozkHDY0FF3igYeUSLy5eytWgZir8bj7zBfyycrOXfMPapG-_CwpQLY8kqjV_tCl6fe8pGOlYncSKsuDSJsvH-tJGC06XZXgeWJEPqSXBdQyXxZrfmlLN0Zt-UKwzLkmGbuwyICLOUUqercwXnZrjBwo8jdEr3Z-lDbJopSEjdZrOAWXjL473ui8ygrW-TqMcVoJOmeB4oU3T41C-OKay0UZazwypo-nAVFFFrpYec30-idFpKfh1nmN1aZ-ytVOgg5RD5G8-CMpSo2DwtOsFv4Tn8gme3ofUcFkNGgAvllWWw4Ia6eWrvdcklumGbALsgILmNAjK30IEpu4f9v4IW3a5Xes6VWvMJtcJCcmAQfCDAV-WDT6WDuEwC8lrPYpdq4SWoKU0Zh4qv4oIvHrarZzEYQhHmGgS8V1KhXg2wQsSyZqZarG02e2eaSc=w1441-h828-s-no?authuser=1)

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
