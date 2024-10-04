import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`bg-01 text-06 text-14 md:text-16 px-[42px] py-[12px] rounded-[50px] transition-all duration-300 hover:bg-05 hover:text-02 ${className ? className : ''}`} {...rest}>
      {children}
    </button>
  );
};
