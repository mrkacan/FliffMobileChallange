
# Fliff Mobile Challange
> **Notes**: Since Twitter APIs V2 version is not free, Sava asked me to mock APIs. Simply I created JSON and hooks for fetching data. I hope it's enough for this challenge. (I was can prefer json-server, but I wanted to focus implementation of challenge.

## Tech Stack
- Navigation: React Navigation
- State Management: Context API
- Type Checking: TypeScript
- Linting: ESLint
- Formatting: Prettier
- Styling: Styled Components
- Testing: Jest, React Native Testing Library
- Using react-native-error-boundary for error handling


## What can be next?
- [ ] Using verticalScale, horizontalScale, moderateScale for responsive design


## Images from App
### IOS
<img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/ios1.png?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/ios2.png?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/ios4.png?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/ios3.png?raw=true" width="22%">

### Android
<img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/android4.jpg?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/android1.jpg?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/android2.jpg?raw=true" width="22%"> <img src="https://github.com/mrkacan/FliffMobileChallange/blob/main/githubAssets/android3.jpg?raw=true" width="22%">

## How to run
### Install dependencies
```bash
yarn install
```
### Run on Android
```bash
npx react-native run-android
```
### Run on iOS
```bash
npx pod-install
```
```bash
npx react-native run-ios
```
### Run Tests
```bash
yarn test
```

## How To Check App
### Login
#### Username input can be tested with these usernames:
- mrkacan (ACTIVE)
- sindre (SUSPENDED)
- john (DEACTIVATED)
- addy (DEACTIVATED)
#### Username input can be tested with following validations:
- Username must be between 4 and 15 characters.
- Usernames containing "Twitter" or "Admin" cannot be claimed.
- If the account is not exist in the system, it will show This account does not exist.
- If the account is already exist in the system, and status is DEACTIVATED, it will show This account is deactivated. You can not proceed.
- If the account is already exist in the system, and status is SUSPENDED, it will show This account is suspended. You can not proceed.
- Your username can only contain letters, numbers and _ (reg ex: /^[A-Za-z0-9_]+$/))

## TO-DO
- [x] Add more tests
  - Added some tests for Login Screen
- [x] Add more comments
- [x] Add more error handling
- [x] UI/UX improvements (Make it more beautiful)
- [x] Complete Readme.md
- [x] Check codebase for bugs and quality
