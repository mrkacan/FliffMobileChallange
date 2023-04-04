import DATA from './users.json';
import {user, UserAccountStatus} from '../../types';

type UseUserMockApi = {
  getUserStatus: (username: string) => UserAccountStatus;
};

const UseUserMockApi = (): UseUserMockApi => {
  const getUser = (username: string) =>
    DATA.find((userItem: user) => userItem.username === username);

  const getUserStatus = (username: string) => {
    const willCheckUser = getUser(username);
    if (willCheckUser?.username) {
      return willCheckUser?.userAccountStatus as UserAccountStatus;
    }
    return UserAccountStatus.NULL;
  };

  return {
    getUserStatus,
  };
};

export default UseUserMockApi;
