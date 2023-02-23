export const theme = {
  navbar: {
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-nord-3 hover:bg-nord-5 focus:outline-none focus:ring-2 focus:ring-nord-5 dark:text-nord-6 dark:hover:bg-nord-3 dark:focus:ring-nord-3 md:hidden',
    },
    root: {
      base: 'border-gray-200 bg-nord-6 px-2 py-2.5 dark:border-gray-700 dark:bg-nord-0 sm:px-4',
    },
    link: {
      active: {
        off: 'text-nord-3 dark:text-nord-6 hover:bg-nord-6 dark:hover:bg-nord-0 md:hover:bg-nord-5 md:p-2 rounded-lg dark:md:bg-transparent dark:md:hover:bg-nord-3',
      },
    },
    collapse: {
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 bg-white dark:bg-nord-1 md:bg-transparent dark:md:bg-transparent p-2 md-p-0 rounded-lg',
    },
  },
  button: {
    color: {
      light:
        'text-nord-1 bg-nord-8 border border-nord-8 dark:bg-nord-8 dark:text-nord-1 dark:border-nord-8 focus:ring-nord-8',
    },
  },
};
