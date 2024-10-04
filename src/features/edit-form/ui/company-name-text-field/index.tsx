import { TextField, useAppDispatch, useAppSelector } from '../../../../shared';
import { setCompanyName } from '../../model';

export const CompanyNameTextField = () => {
  const companyName = useAppSelector((state) => state.editUser.user.company.name);
  const dispatch = useAppDispatch();

  return <TextField heading="Название компании" placeholder="Название компании" value={companyName} onChange={(e) => dispatch(setCompanyName(e.target.value))} onClear={() => dispatch(setCompanyName(''))} />;
};
