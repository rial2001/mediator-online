const newWorks = [
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '1',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'new',
    userId: '123456789',
  },
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '789',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'new',
    userId: '123456789',
  },
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '2555',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'new',
    userId: '123456789',
  },

  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '2',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'new',
    userId: '123456789',
  },
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '4',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'new',
    userId: '123456789',
  },
];

const processWorks = [
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки.',
    id: '5',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'process',
    userId: '123456789',
  },
];

const finishWorks = [
  {
    category: 'Категория',
    chat: '/',
    description: 'Краткое разяснение проблемы. В 2-3 строки. ',
    id: '3',
    members: [
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
      { avatar: '/avatar.png', name: 'Ф.И.О. первой стороны' },
    ],
    type: 'finish',
    userId: '123456789',
  },
];

export const worksCollection = {
  123456789: {
    finish: finishWorks,
    new: newWorks,
    process: processWorks,
  },
};
