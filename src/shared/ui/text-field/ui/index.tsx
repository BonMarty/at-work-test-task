import CrossSvg from '../../../assets/cross.svg?react';
import { TextFieldProps } from './types';

export const TextField = (props: TextFieldProps) => {
  const { heading, onClear, ...rest } = props;

  return (
    <label className="block space-y-[10px]">
      <span className="block text-16 md:text-18">{heading}</span>
      <div className="relative">
        <input {...rest} className="w-full border-2 border-04 rounded-[50px] pl-[16px] pr-[36px] py-[10px] text-14 md:text-16" />
        <CrossSvg className={`absolute h-full top-0 right-4 cursor-pointer transition-all duration-300 ${props.value ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClear} />
      </div>
    </label>
  );
};
