
# [WIP] Fliff Mobile Challange
> **Notes**: Since Twitter APIs V2 version is not free, Sava asked me to mock APIs. Simply I created JSON and hooks for fetching data. I hope it's enough for this challenge. (I was can prefer json-server, but I wanted to focus implementation of challenge.

## Tech Stack
- Navigation: React Navigation
- State Management: Context API
- Type Checking: TypeScript
- Linting: ESLint
- Formatting: Prettier
- Styling: Styled Components
- Testing: Jest, React Native Testing Library


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
- [ ] Add more tests
- [ ] Add more comments
- [ ] Add more error handling
- [ ] UI/UX improvements (Make it more beautiful)
- [ ] Complete Readme.md
- [ ] Check codebase for bugs and quality
