import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../shared';
import MoreMobileSvg from '../../shared/assets/more-mobile.svg?react';
import MoreSvg from '../../shared/assets/more.svg?react';
import { ActivateUser } from './activate-user';
import { ArchiveUser } from './archive-user';
import { HideUser } from './hide-user';
import { MoreDropdownProps } from './types';

export const MoreDropdown = React.memo((props: MoreDropdownProps) => {
  const { inArchive, ...user } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownRef = React.useRef<HTMLUListElement>(null);

  const handleClickOutsideOfDropdown = React.useCallback((event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideOfDropdown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideOfDropdown);
    };
  }, []);

  return (
    <>
      <MoreMobileSvg className={`${isOpen ? 'pointer-events-none' : 'pointer-events-auto'} absolute top-[165px] md:top-6 right-2 w-fit h-fit md:hidden fill-01 cursor-pointer transition-all duration-300 hover:fill-accent`} onClick={() => setIsOpen(!isOpen)} />
      <MoreSvg className={`${isOpen ? 'pointer-events-none' : 'pointer-events-auto'} absolute top-[165px] md:top-6 right-2 w-fit h-fit hidden md:block fill-01 cursor-pointer transition-all duration-300 hover:fill-accent`} onClick={() => setIsOpen(!isOpen)} />
      <ul ref={dropdownRef} className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute top-[185px] md:top-12 right-0 w-fit min-w-36 md:min-w-[184px] h-fit bg-06 p-2 space-y-2 rounded-lg z-10 transition-all duration-300 shadow-[0px_0px_2px_0px_#5A5A5A]`}>
        {!inArchive ? (
          <>
            <li className="cursor-pointer">
              <Link to={`/edit/${user.id}`}>
                <Typography variant="Text" subvariant={2} weight="medium" className="px-3 py-2">
                  Редактировать
                </Typography>
              </Link>
            </li>
            <ArchiveUser {...user} />
            <HideUser {...user} />
          </>
        ) : (
          <ActivateUser {...user} />
        )}
      </ul>
    </>
  );
});
