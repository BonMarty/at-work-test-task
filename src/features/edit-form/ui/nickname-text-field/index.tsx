import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setNickname } from '../../model';

export const NicknameTextField = () => {
  const nickname = useAppSelector((state) => state.editUser.user.username);
  const dispatch = useAppDispatch();

  return <TextField heading="Никнейм" placeholder="Никнейм" value={nickname} onChange={(e) => dispatch(setNickname(e.target.value))} onClear={() => dispatch(setNickname(''))} />;
};
