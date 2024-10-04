import { Typography } from '../../../shared';
import { UserProps } from './types';

export const UserCard = (props: UserProps) => {
  const { name, company, address, inArchive } = props;

  return (
    <div className="p-6 min rounded-2xl bg-06 flex flex-col md:flex-row items-start md:items-center gap-5">
      <img src="/user.jpg" alt="user" className={`${inArchive ? 'grayscale' : 'filter-none'} w-full md:w-[112px] h-[120px] rounded-2xl object-cover`} />
      <div className="w-full h-full flex flex-col justify-between gap-3 flex-1 relative">
        <div className="space-y-1">
          <Typography variant="Heading" className={`${inArchive ? 'text-02' : 'text-accent'}`}>
            {name}
          </Typography>
          <Typography variant="Text" subvariant={2} weight="medium" className={`${inArchive ? 'text-03' : 'text-02'}`}>
            {company.name}
          </Typography>
        </div>
        <Typography variant="Caption" className={`${inArchive ? 'text-04' : 'text-03'}`}>
          {address.city}
        </Typography>
      </div>
    </div>
  );
};
