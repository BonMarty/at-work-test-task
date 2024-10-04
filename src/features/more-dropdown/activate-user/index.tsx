import { activateUser } from '../../../entities';
import { Typography, User, useAppDispatch } from '../../../shared';

export const ActivateUser = (props: User) => {
  const dispatch = useAppDispatch();

  return (
    <li className="cursor-pointer" onClick={() => dispatch(activateUser(props))}>
      <Typography variant="Text" subvariant={2} weight="medium" className="px-3 py-2">
        Активировать
      </Typography>
    </li>
  );
};
