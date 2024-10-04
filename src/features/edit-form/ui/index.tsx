import { openPopup } from '../../../entities';
import { Typography, useAppDispatch, useAppSelector } from '../../../shared';
import { CityTextField } from './city-text-field';
import { CompanyNameTextField } from './company-name-text-field';
import { EditFormButton } from './edit-form-button';
import { EmailTextField } from './email-text-field';
import { NameTextField } from './name-text-field';
import { NicknameTextField } from './nickname-text-field';
import { PhoneTextField } from './phone-text-field';

export const EditForm = () => {
  const isLoading = useAppSelector((state) => state.editUser.isLoading);
  const isError = useAppSelector((state) => state.editUser.isError);

  const dispatch = useAppDispatch();

  if (isLoading) return <Typography variant="Title">Загрузка...</Typography>;

  if (isError) return <Typography variant="Title">Ошибка!</Typography>;

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(openPopup());
      }}>
      <div className="space-y-6">
        <NameTextField />
        <NicknameTextField />
        <EmailTextField />
        <CityTextField />
        <PhoneTextField />
        <CompanyNameTextField />
      </div>
      <EditFormButton />
    </form>
  );
};
