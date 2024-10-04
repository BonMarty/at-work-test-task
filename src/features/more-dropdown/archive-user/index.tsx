import { archiveUser } from '../../../entities';
import { Typography, User, useAppDispatch } from '../../../shared';

export const ArchiveUser = (props: User) => {
  const dispatch = useAppDispatch();

  return (
    <li className="cursor-pointer" onClick={() => dispatch(archiveUser(props))}>
      <Typography variant="Text" subvariant={2} weight="medium" className="px-3 py-2">
        Архивировать
      </Typography>
    </li>
  );
};
