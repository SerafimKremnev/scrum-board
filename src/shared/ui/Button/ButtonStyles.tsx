import { cva } from 'cva';

export const cvaButton = cva({
  base: [
    'ButtonStyles-cvaButton',
    'relative',
    'inline-flex items-center justify-center',
    'group/button cursor-pointer select-none disabled:cursor-not-allowed',
  ],
  variants: {
    theme: {},
    size: {},
    isLoading: {
      true: ['!text-opacity-0'],
      false: [],
    },
  },
  defaultVariants: {},
});

export const cvaIcon = cva({
  base: [
    'ButtonStyles-cvaIcon',
    'inline-flex justify-center items-center',
    'text-0',
    'rounded-full',
  ],
  variants: {
    theme: {},
    size: {},
    isLoading: {},
  },
  defaultVariants: {},
});

export const cvaButtonInner = cva({
  base: ['ButtonStyles-cvaButtonInner', 'block overflow-hidden'],
  variants: {
    size: {},
  },
});

export const cvaButtonInnerRow = cva({
  base: ['ButtonStyles-cvaButtonInnerRow', 'relative', 'block'],
});
