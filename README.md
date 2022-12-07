# React-Native-Easy-Chatbot  

A chatbot demo app using Huggingface inference API, React Native, Expo, and Redux Sagas. Build for Android, iOS, and Web.

![Supports Expo iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)
![Supports Expo Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)
![Supports Expo Web](https://img.shields.io/badge/Web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=A4C639&logoColor=fff)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

Based on:

- Expo SDK `46` React Native for Android, iOS, Web and Expo Go
- [Huggingface Question Answering API](https://huggingface.co/deepset/tinyroberta-squad2) open source machine learning model
- [Redux-Saga](https://redux-saga.js.org/) Async middleware for Redux
- [Ignite from Infinite Red](https://github.com/infinitered/ignite) React Native Boilerplate

## Features

- The API is called using Redux-Saga for clear, testable async logic
- Axios with Axios-Retry for data fetching
- API error handling
- React Error Boundary
- ESLint and Prettier to standarize formating
- Husky for conventional commits
- Jest for unit testing
- Semantic Release to bump versions and automatically generate [CHANGELOG.md](./CHANGELOG.md)
- Github Actions for CI/CD
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat) for Material Design and accesability
- Reusable chat component

## Installation 

```sh
git clone https://github.com/kurtvandusen/React-Native-Easy-Chatbot
cd React-Native-Easy-Chatbot
npm i
```

## Optional - Create .env

In the root directory, create a new file named .env and copy and paste the contents from .env.example. Then replace the example value with your own Huggingface API key.

[Create a huggingface.co account to get your free API key](https://huggingface.co/)

## Optional - Customize Constants in app.config.js

In the root directory, locate the app.config.js file. Edit the ` extra: {}` section to customize the values the will be used by Expo-Constants for
- huggingfaceKey
- baseURL
- messagesPlaceholder
- messagesErrorMessage

## Optional - Change baseURL to use a different Question Answering NLP model

[Explore more Question Answering NLP models on huggingface](https://huggingface.co/models?pipeline_tag=question-answering&sort=downloads&search=question+answering)

Simply change your baseURL to use a different model.

## Optional - Change Question Answering Context  

Update [context.ts](./assets/context.ts) with the text string of your choice. The chatbot will draw all answers from this text only. The current example context file contains text about the history of Nintendo Co, Ltd. drawn from [Wikipedia](https://en.wikipedia.org/wiki/Nintendo)

## Unit Testing Sagas  

[Here is an example of testing the saga async logic using Jest](./app/features/messages/__tests__/MessagesSagas.ts)