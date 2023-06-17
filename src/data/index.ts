import { BoardType } from 'types';

export const columnColors = [
  '#ff0038',
  '#49C4E5',
  '#8471F2',
  '#67E2AE',
  '#ff9f00',
  '#fff44f',
] as const;

export const boards: BoardType[] = [
  {
    name: 'Platform Launch',
    columns: [
      {
        name: 'Todo',
        color: '#49C4E5',

        tasks: [
          {
            title: 'Build UI for onboarding flow',
            description: '',
            subtasks: [
              {
                title: 'Sign up page',
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Build UI for search',
            description: '',
            subtasks: [
              {
                title: 'Search page',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Build settings UI',
            description: '',
            subtasks: [
              {
                title: 'Account page',
                isCompleted: false,
              },
              {
                title: 'Billing page',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'QA and test all major user journeys',
            description:
              'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
            subtasks: [
              {
                title: 'Internal testing',
                isCompleted: false,
              },
              {
                title: 'External testing',
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: 'Doing',
        color: '#8471F2',
        tasks: [
          {
            title: 'Design settings and search pages',
            description: '',
            subtasks: [
              {
                title: 'Settings - Account page',
                isCompleted: true,
              },
              {
                title: 'Settings - Billing page',
                isCompleted: true,
              },
              {
                title: 'Search page',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add account management endpoints',
            description: '',
            subtasks: [
              {
                title: 'Upgrade plan',
                isCompleted: true,
              },
              {
                title: 'Cancel plan',
                isCompleted: true,
              },
              {
                title: 'Update payment method',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Design onboarding flow',
            description: '',
            subtasks: [
              {
                title: 'Sign up page',
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add search enpoints',
            description: '',
            subtasks: [
              {
                title: 'Add search endpoint',
                isCompleted: true,
              },
              {
                title: 'Define search filters',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add authentication endpoints',
            description: '',
            subtasks: [
              {
                title: 'Define user model',
                isCompleted: true,
              },
              {
                title: 'Add auth endpoints',
                isCompleted: false,
              },
            ],
          },
          {
            title:
              'Research pricing points of various competitors and trial different business models',
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subtasks: [
              {
                title: 'Research competitor pricing and business models',
                isCompleted: true,
              },
              {
                title: 'Outline a business model that works for our solution',
                isCompleted: false,
              },
              {
                title:
                  'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: 'Done',
        color: '#67E2AE',
        tasks: [
          {
            title: 'Conduct 5 wireframe tests',
            description:
              'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
            subtasks: [
              {
                title: 'Complete 5 wireframe prototype tests',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Create wireframe prototype',
            description:
              'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
            subtasks: [
              {
                title: 'Create clickable wireframe prototype in Balsamiq',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Review results of usability tests and iterate',
            description:
              "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            subtasks: [
              {
                title: 'Meet to review notes from previous tests and plan changes',
                isCompleted: true,
              },
              {
                title: 'Make changes to paper prototypes',
                isCompleted: true,
              },
              {
                title: 'Conduct 5 usability tests',
                isCompleted: true,
              },
            ],
          },
          {
            title:
              'Create paper prototypes and conduct 10 usability tests with potential customers',
            description: '',
            subtasks: [
              {
                title: 'Create paper prototypes for version one',
                isCompleted: true,
              },
              {
                title: 'Complete 10 usability tests',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Market discovery',
            description:
              'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
            subtasks: [
              {
                title: 'Interview 10 prospective customers',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Competitor analysis',
            description: '',
            subtasks: [
              {
                title: 'Find direct and indirect competitors',
                isCompleted: true,
              },
              {
                title: 'SWOT analysis for each competitor',
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Research the market',
            description:
              'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
            subtasks: [
              {
                title: 'Write up research analysis',
                isCompleted: true,
              },
              {
                title: 'Calculate TAM',
                isCompleted: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Marketing Plan',
    columns: [
      {
        name: 'Todo',
        color: '#49C4E5',
        tasks: [
          {
            title: 'Plan Product Hunt launch',
            description: '',
            subtasks: [
              {
                title: 'Find hunter',
                isCompleted: false,
              },
              {
                title: 'Gather assets',
                isCompleted: false,
              },
              {
                title: 'Draft product page',
                isCompleted: false,
              },
              {
                title: 'Notify customers',
                isCompleted: false,
              },
              {
                title: 'Notify network',
                isCompleted: false,
              },
              {
                title: 'Launch!',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Share on Show HN',
            description: '',
            subtasks: [
              {
                title: 'Draft out HN post',
                isCompleted: false,
              },
              {
                title: 'Get feedback and refine',
                isCompleted: false,
              },
              {
                title: 'Publish post',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Write launch article to publish on multiple channels',
            description: '',
            subtasks: [
              {
                title: 'Write article',
                isCompleted: false,
              },
              {
                title: 'Publish on LinkedIn',
                isCompleted: false,
              },
              {
                title: 'Publish on Inndie Hackers',
                isCompleted: false,
              },
              {
                title: 'Publish on Medium',
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: 'Doing',
        color: '#8471F2',
        tasks: [],
      },
      {
        name: 'Done',
        color: '#67E2AE',
        tasks: [],
      },
    ],
  },
  {
    name: 'Roadmap',
    columns: [
      {
        name: 'Now',
        color: '#ff0038',
        tasks: [
          {
            title: 'Launch version one',
            description: '',
            subtasks: [
              {
                title: 'Launch privately to our waitlist',
                isCompleted: false,
              },
              {
                title: 'Launch publicly on PH, HN, etc.',
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Review early feedback and plan next steps for roadmap',
            description:
              "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            subtasks: [
              {
                title: 'Interview 10 customers',
                isCompleted: false,
              },
              {
                title: 'Review common customer pain points and suggestions',
                isCompleted: false,
              },
              {
                title: 'Outline next steps for our roadmap',
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: 'Next',
        color: '#ff9f00',
        tasks: [],
      },
      {
        name: 'Later',
        color: '#49C4E5',
        tasks: [],
      },
    ],
  },
];
