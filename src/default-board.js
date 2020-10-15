import { uuid } from './utils.js';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'The new website requires deploying. Pick a suitable building tool. ',
          name: 'Deploy new website',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Find a good technology for the frontend',
          name: 'Frontend Stack',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'What database should be used?',
          name: 'Backend - DB',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: 'Prototype a nice design for the website.',
          name: 'Developing figma design',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: 'First meeting with the client for requirements.',
          name: 'Requirements',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
