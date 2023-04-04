export type user = {
  username: string;
  name: string;
  avatar: string;
};

export type tweet = {
  author_id: string;
  created_at: string;
  id: string;
  image: string;
  text: string;
};

export enum UserAccountStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DEACTIVATED = 'deactivated',
  NULL = 'null',
}
