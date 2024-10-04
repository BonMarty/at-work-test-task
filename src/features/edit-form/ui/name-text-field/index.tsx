import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setName } from '../../model';

export const NameTextField = () => {
  const name = useAppSelector((state) => state.editUser.user.name);
  const dispatch = useAppDispatch();

  return <TextField heading="Никнейм" placeholder="Имя" value={name} onChange={(e) => dispatch(setName(e.target.value))} onClear={() => dispatch(setName(''))} />;
};
