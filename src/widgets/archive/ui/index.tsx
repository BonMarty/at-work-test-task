import { UserCard } from '../../../entities';
import { MoreDropdown } from '../../../features';
import { Typography, useAppSelector } from '../../../shared';

export const Archive = () => {
  const { archive, isLoading, isError } = useAppSelector((state) => state.users);

  if (isLoading) return <Typography variant="Title">Загрузка...</Typography>;

  if (isError) return <Typography variant="Title">Ошибка!</Typography>;

  if (archive.length === 0) return <Typography variant="Title">В архиве нет пользователей</Typography>;

  if (archive) {
    return (
      <ul className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {archive.map((item) => (
          <li key={item.id} className="grid h-full relative">
            <UserCard {...item} inArchive />
            <MoreDropdown {...item} inArchive />
          </li>
        ))}
      </ul>
    );
  }
};
