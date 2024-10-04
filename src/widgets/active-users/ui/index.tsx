import { UserCard } from '../../../entities';
import { MoreDropdown } from '../../../features';
import { Typography, useAppSelector } from '../../../shared';

export const ActiveUsers = () => {
  const { users, isLoading, isError } = useAppSelector((state) => state.users);

  if (isLoading) return <Typography variant="Title">Загрузка...</Typography>;

  if (isError) return <Typography variant="Title">Ошибка!</Typography>;

  if (users.length === 0) return <Typography variant="Title">Нет активных пользователей</Typography>;

  if (users) {
    return (
      <ul className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {users.map((item) => (
          <li key={item.id} className="grid h-full relative">
            <UserCard {...item} />
            <MoreDropdown {...item} />
          </li>
        ))}
      </ul>
    );
  }
};
