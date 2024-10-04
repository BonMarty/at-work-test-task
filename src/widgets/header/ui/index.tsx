import { Link } from 'react-router-dom';
import { Typography } from '../../../shared';
import FavoriteSvg from '../../../shared/assets/favorite.svg?react';
import LogoSvg from '../../../shared/assets/logo.svg?react';
import NotificationSvg from '../../../shared/assets/notification.svg?react';

export const Header = () => {
  return (
    <header className="p-4 bg-06">
      <div className="flex justify-between items-center max-w-[1160px] mx-auto">
        <Link to={'/'}>
          <LogoSvg />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center">
            <FavoriteSvg />
            <NotificationSvg />
          </div>
          <div className="flex items-center gap-2">
            <img src="/user.jpg" alt="User" className="w-5 h-5 rounded-full object-cover" />
            <Typography variant="Text" subvariant={2} weight="medium" className="hidden md:block text-02">
              Ivan1234
            </Typography>
          </div>
        </div>
      </div>
    </header>
  );
};
