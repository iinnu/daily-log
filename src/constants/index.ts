import sun from '@/assets/sun.png';
import cloud from '@/assets/cloud.png';
import cloudy from '@/assets/cloudy.png';
import rainy from '@/assets/rainy.png';

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WEATHER_IMAGES = {
  sun,
  rainy,
  cloud,
  cloudy,
};

export const INITIAL_LOCATION = {
  x: 89,
  y: 90,
};

export const CATEGORY_LIST = 'categoryList';

export const MOCK_TODOS = [
  {
    category: 'Study',
    todos: [
      {
        title: '모듈 시스템 공부',
        completed: true,
      },
      {
        title: '웹팩 공부',
        completed: false,
      },
    ],
  },
  {
    category: 'Workout',
    todos: [],
  },
  {
    category: 'Housework',
    todos: [
      {
        title: '빨래 널기',
        completed: false,
      },
    ],
  },
];
