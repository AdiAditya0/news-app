# News App

### Description

A news app that fetches the top 100 news headlines, stores them for offline access, displays them in a dynamic list view, and allows user interaction.

Set up a new React Native project using either Expo or React Native CLI.

- Implemented a background task to fetch the top 100 news headlines from a news API
  https://newsapi.org/
- Stored these headlines in local storage for offline access.
- On app load, display a splash logo and small animation.
- HomeScreens shows a list view with the first 10 headlines.
- Implemented a timer that introduces a new batch of up to 5 random headlines to the top of the list every 10 seconds.
- Implemented Reload Button for users to manually trigger fetching the next batch from local storage and resetting the drip timer.
- Added logic, when all headlines from the current batch have been displayed, reset local storage and fetch the next batch of headlines and populate the list view.
- Used 3rd party library to allow users to swipe a headline to delete it or pin it to the top of the view.
- A pinned headline should stay in view when the list updates, whether manually or automatically.
- Deleting a headline should remove it from view, with the next headline appearing at the top of the list.

### Assumptions

- The API will always return different set of news, once current set of 100 news get exhausted.

### Pre-requisites

React Native Development Environment Setup -> (https://reactnative.dev/docs/environment-setup)

Node -> v21.6.2
CocoaPod -> 1.11.3
Minimum iOS version -> 13.4
Android minSdkVersion -> 21

### Project Setup

- Clone the repository
- Install dependencies using `npm i`

> Run on iOS

- Run `npx pod-install`
- Run `npx react-native run-ios`

> Run on Android

- Run `npx react-native run-android`

### Issues

- API might show some redundant data after refetching and syncing

### APK

- [APK link](https://i.diawi.com/WvsJkj)
