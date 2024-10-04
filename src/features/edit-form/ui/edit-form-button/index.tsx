import { Button, useAppSelector } from '../../../../shared';
import { getDisabled } from '../../utils';

export const EditFormButton = () => {
  const user = useAppSelector((state) => state.editUser.user);

  return (
    <Button className={`${getDisabled(user) ? 'pointer-events-none' : 'pointer-events-auto'} w-full md:w-fit`} disabled={getDisabled(user)}>
      Сохранить
    </Button>
  );
};
