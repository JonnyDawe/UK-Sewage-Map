import styled from '@emotion/styled';
import React from 'react';

import { IconName } from '@/lib/types/Icons';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  inline?: boolean;
}

const StyledSvg = styled.svg<IconProps>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  vertical-align: middle;
  margin-inline-end: ${({ inline }) => (inline ? '1' : '0')};
  user-select: none;
`;

const SvgIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    { name, size = 12, color = 'currentColor', className, style, inline = false, ...props },
    ref,
  ) => (
    <StyledSvg
      aria-hidden
      ref={ref}
      className={className}
      width={size}
      height={size}
      fill={color}
      style={style}
      inline={inline}
      name={name}
      {...props}
    >
      <use xlinkHref={`/svg/sprites.svg#${name}`} />
    </StyledSvg>
  ),
);

export default SvgIcon;
