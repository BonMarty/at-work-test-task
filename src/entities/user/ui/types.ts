import { User } from '../../../shared';

export interface UserProps extends User {
  inArchive?: boolean;
}
