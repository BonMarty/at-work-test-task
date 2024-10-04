import { User } from '../../../shared';

export interface UsersState {
  users: User[];
  archive: User[];
  isLoading: boolean;
  isError: boolean;
}
