export interface TypographyTitleProps extends React.ComponentPropsWithoutRef<'h2'> {
  variant: 'Title';
  children: React.ReactNode;
}

export interface TypographyHeadingProps extends React.ComponentPropsWithoutRef<'h3'> {
  variant: 'Heading';
  children: React.ReactNode;
}

export interface TypographyTextProps extends React.ComponentPropsWithoutRef<'p'> {
  variant: 'Text';
  subvariant: 1 | 2;
  weight: 'medium' | 'semibold';
  children: React.ReactNode;
}

export interface TypographyCaptionProps extends React.ComponentPropsWithoutRef<'span'> {
  variant: 'Caption';
  children: React.ReactNode;
}

export type TypographyProps = TypographyTitleProps | TypographyHeadingProps | TypographyTextProps | TypographyCaptionProps;
