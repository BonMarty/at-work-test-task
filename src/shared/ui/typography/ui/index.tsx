import { TypographyProps } from './types';

export const Typography = (props: TypographyProps) => {
  const { variant, children, className, ...rest } = props;

  if (variant === 'Title') {
    return (
      <h2 className={`text-[24px] font-semibold ${className ? className : ''}`} {...rest}>
        {children}
      </h2>
    );
  }

  if (variant === 'Heading') {
    return (
      <h3 className={`text-[18px] md:text-[20px] font-semibold ${className ? className : ''}`} {...rest}>
        {children}
      </h3>
    );
  }

  if (variant === 'Text') {
    const subvariant = props.subvariant === 1 ? 'text-[16px] md:text-[18px]' : 'text-[14px] md:text-[16px]';
    const weight = props.weight === 'medium' ? 'font-medium' : 'font-semibold';

    return (
      <p {...rest} className={`${subvariant} ${weight} ${className ? className : ''}`}>
        {children}
      </p>
    );
  }

  if (variant === 'Caption') {
    return <span className={`text-[10px] md:text-[14px] font-semibold md:font-normal ${className ? className : ''}`}>{children}</span>;
  }
};
