import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'The first task',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'The second task',
          name: 'Second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Is this the third task?',
          name: 'Third task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: 'Done first task',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
