import { User } from '../../../shared';

export const getDisabled = (user: User) => {
  if (!user.name || !user.username || !user.email || !user.address.city || !user.phone || !user.company.name) {
    return true;
  }

  return false;
};
