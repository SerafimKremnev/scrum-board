import { cva } from 'class-variance-authority';

export const cvaButton = cva(
  [
    'relative',
    'inline-flex items-center justify-center',
    'group/button cursor-pointer select-none disabled:cursor-not-allowed',
  ],
  {
    variants: {
      theme: {},
      size: {},
      isLoading: {
        true: ['!text-opacity-0'],
        false: [],
      },
    },
    defaultVariants: {},
  }
);

export const cvaIcon = cva(
  ['inline-flex justify-center items-center', 'text-0', 'rounded-full'],
  {
    variants: {
      theme: {},
      size: {},
      isLoading: {},
    },
    defaultVariants: {},
  }
);

export const cvaButtonInner = cva(['block overflow-hidden'], {
  variants: {
    size: {},
  },
});

export const cvaButtonInnerRow = cva(['block align-middle relative']);
