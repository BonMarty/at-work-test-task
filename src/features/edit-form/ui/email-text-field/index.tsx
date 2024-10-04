import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setEmail } from '../../model';

export const EmailTextField = () => {
  const email = useAppSelector((state) => state.editUser.user.email);
  const dispatch = useAppDispatch();

  return <TextField heading="Почта" placeholder="Почта" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} onClear={() => dispatch(setEmail(''))} />;
};
