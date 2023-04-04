import {UserAccountStatus} from '../types';

const usernamePattern = /^[A-Za-z0-9_]+$/;

export const validations = {
  username: {
    length: (value: string) => {
      return (
        (value.length >= 4 && value.length <= 15) ||
        'Username must be between 4 and 15 characters.'
      );
    },
    notTwitterOrAdmin: (value: string) => {
      return (
        !(
          value.toLowerCase() === 'twitter' || value.toLowerCase() === 'admin'
        ) || 'Usernames containing "Twitter" or "Admin" cannot be claimed.'
      );
    },
    isUserAvailableForLogin: (userStatus: UserAccountStatus) => {
      if (userStatus === UserAccountStatus.ACTIVE) {
        return true;
      }
      if (userStatus === UserAccountStatus.NULL) {
        return 'This account does not exist.';
      }
      return `This account status is ${userStatus}. You can not proceed.`;
    },
    validCharacters: (value: string) => {
      return (
        usernamePattern.test(value) ||
        'Your username can only contain letters, numbers and _'
      );
    },
  },
};
