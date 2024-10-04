import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setCity } from '../../model';

export const CityTextField = () => {
  const city = useAppSelector((state) => state.editUser.user.address.city);
  const dispatch = useAppDispatch();

  return <TextField heading="Город" placeholder="Город" value={city} onChange={(e) => dispatch(setCity(e.target.value))} onClear={() => dispatch(setCity(''))} />;
};
