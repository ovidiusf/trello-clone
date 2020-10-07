import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'Second task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'Third task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
