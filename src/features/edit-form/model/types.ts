import { User } from '../../../shared';

export interface EditUserState {
  user: User;
  isLoading: boolean;
  isError: boolean;
}
