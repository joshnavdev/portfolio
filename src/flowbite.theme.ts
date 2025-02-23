export const theme = {
  navbar: {
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-nord-3 hover:bg-nord-5 focus:outline-none focus:ring-2 focus:ring-nord-5 dark:text-nord-6 dark:hover:bg-nord-3 dark:focus:ring-nord-3 md:hidden',
    },
    root: {
      base: 'border-gray-200 px-2 py-2.5 dark:border-gray-700 bg-nord-0 sm:px-4',
    },
    link: {
      active: {
        off: 'text-nord-6 hover:bg-nord-0 md:hover:bg-nord-3 md:p-2 rounded-lg md:bg-transparent',
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
  timeline: {
    direction: {
      vertical: 'relative border-l border-nord-6 border-opacity-30',
    },
    item: {
      base: {
        vertical: 'mb-2 ml-6',
      },
      content: {
        time: 'mb-0 text-sm font-normal leading-none text-nord-8',
        body: 'mb-4 text-base font-normal',
        title: 'text-lg font-semibold text-nord-6',
      },
      point: {
        marker: {
          icon: {
            wrapper:
              'absolute -left-3 my-2 flex h-6 w-6 text-nord-1 items-center justify-center rounded-full bg-nord-8 ring-8 ring-nord-0',
          },
        },
      },
    },
  },
  dropdown: {
    floating: {
      style: {
        auto: 'border border-nord-8 text-nord-6 bg-nord-0',
      },
      item: {
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-nord-6 hover:bg-nord-3 focus:outline-none',
      },
    },
  },
};
