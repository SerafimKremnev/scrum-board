import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['BoardStyles-cvaRoot', 'w-full min-h-screen p-2 bg-gray-100'],
});

export const cvaInput = cva({
  base: [
    'w-64 px-2 py-1 mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
  ],
});

export const cvaButton = cva({
  base: [
    'px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors',
  ],
});

export const cvaColumns = cva({
  base: ['mt-2 grid grid-cols-3 gap-2'],
});

export const cvaColumn = cva({
  base: ['bg-white p-2 rounded-lg shadow-md min-h-[calc(100svh_-_12rem)]'],
});

export const cvaColumnTitle = cva({
  base: ['text-3xl font-semibold mb-2 text-gray-800'],
});

export const cvaTask = cva({
  base: [
    'p-1 py-2 mb-2 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors flex justify-between items-center',
  ],
});

export const cvaDeleteButton = cva({
  base: [
    'ml-2 text-gray-400 hover:text-red-500 transition-colors w-2 h-2 flex items-center justify-center rounded-full hover:bg-red-100',
  ],
});
