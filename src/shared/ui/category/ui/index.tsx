import { Typography } from '../../typography';
import { CategoryProps } from './types';

export const Category = (props: CategoryProps) => {
  const { children, isActive, ...rest } = props;

  return (
    <div className="border-b border-03 pb-[8px] md:pb-[12px] w-full group cursor-pointer" {...rest}>
      <Typography variant="Text" subvariant={2} weight="medium" className={`${isActive ? 'text-01' : 'text-03 group-hover:text-accent'} transition-all duration-300 `}>
        {children}
      </Typography>
    </div>
  );
};
