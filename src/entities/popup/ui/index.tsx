import React from 'react';
import { Typography, useAppDispatch, useAppSelector } from '../../../shared';
import CheckboxSvg from '../../../shared/assets/checkbox.svg?react';
import CrossSvg from '../../../shared/assets/cross.svg?react';
import { closePopup } from '../model';

export const Popup = () => {
  const { isOpen } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const closePopupAfterFourSecondsTimeout = setTimeout(() => {
      dispatch(closePopup());
    }, 4000);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      clearTimeout(closePopupAfterFourSecondsTimeout);
    };
  }, [isOpen]);

  return (
    <div className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed top-0 left-0 right-0 bottom-0 w-svw h-svh bg-01 bg-opacity-[24%] flex justify-center items-center transition-all duration-500`}>
      <div className="relative bg-06 rounded-2xl p-8 md:p-10 flex flex-col items-center gap-4 md:gap-5">
        <CheckboxSvg />
        <Typography variant="Heading">Изменения сохранены!</Typography>
        <CrossSvg className="absolute top-4 right-4 w-fit h-fit cursor-pointer" onClick={() => dispatch(closePopup())} />
      </div>
    </div>
  );
};
