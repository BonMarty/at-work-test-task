export interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  heading?: string;
  onClear?: () => void;
}
