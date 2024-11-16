import { VariantProps } from 'cva';
import clsx from 'clsx';
import { FC } from 'react';
import { cvaLoading } from './LoadingSpinnerStyles';

interface Props extends VariantProps<typeof cvaLoading> {
  className?: string;
  color?: string;
}

const LoadingSpinner: FC<Props> = ({ size, color = '#000', className }) => {
  return (
    <div
      className={clsx(cvaLoading({ size }), className)}
      style={{ fontSize: size + 'px' }}>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}></div>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}></div>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}></div>
    </div>
  );
};

export default LoadingSpinner;
