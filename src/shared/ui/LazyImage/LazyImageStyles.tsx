import { cva } from 'cva';

export const cvaImageWrap = cva({
  base: [
    'LazyImageStyles-cvaImageWrap',
    'overflow-hidden [backface-visibility:hidden]',
  ],
  variants: {
    type: {
      relative: ['inline-block'],
      absolute: ['absolute inset-0'],
    },
  },
});

export const cvaImage = cva({
  base: [
    'LazyImageStyles-cvaImage',
    'transition-all duration-300 ease-in-out [backface-visibility:hidden]',
  ],
  variants: {
    state: {
      default: ['opacity-0'],
      loaded: ['opacity-1'],
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
