import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setPhone } from '../../model';

export const PhoneTextField = () => {
  const phone = useAppSelector((state) => state.editUser.user.phone);
  const dispatch = useAppDispatch();

  return <TextField heading="Телефон" placeholder="Телефон" value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} onClear={() => dispatch(setPhone(''))} />;
};
