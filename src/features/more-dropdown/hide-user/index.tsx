import { hideUser } from '../../../entities';
import { Typography, User, useAppDispatch } from '../../../shared';

export const HideUser = (props: User) => {
  const dispatch = useAppDispatch();

  return (
    <li className="cursor-pointer" onClick={() => dispatch(hideUser(props))}>
      <Typography variant="Text" subvariant={2} weight="medium" className="px-3 py-2">
        Скрыть
      </Typography>
    </li>
  );
};
