import { cva } from 'cva';

export const cvaLoading = cva({
  base: [
    'LoadingSpinner-cvaLoading',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'z-[2] block',
    'text-[2rem] w-[1em] h-[1em]',
    '[&>div]:box-border [&>div]:block [&>div]:absolute',
    '[&>div]:w-full [&>div]:h-full',
    '[&>div]:rounded-[50%]',
    '[&>div]:border-[0.1em]',
    '[&>div]:animate-lds-ring',
    '[&>div:nth-child(1)]:-animation-delay-[0.45s]',
    '[&>div:nth-child(2)]:-animation-delay-[0.3s]',
    '[&>div:nth-child(3)]:-animation-delay-[0.15s]',
  ],
  variants: {
    size: {
      small: ['text-[2rem]'],
      normal: ['text-[4rem]'],
      large: ['text-[7rem]'],
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});
