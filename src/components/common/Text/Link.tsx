import { Link as PrimitiveLink } from '@radix-ui/themes';

export const Link: React.FC<React.ComponentProps<typeof PrimitiveLink>> = ({
  children,
  ...props
}) => {
  return (
    <PrimitiveLink underline="always" {...props}>
      {children}
    </PrimitiveLink>
  );
};
