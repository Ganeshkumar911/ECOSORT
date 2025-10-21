import { UserProfile } from '../types';

export const userProfile: UserProfile = {
  name: 'Fusion Hackers',
  avatar: 'https://thumbs.dreamstime.com/b/eco-friendly-concept-butterfly-world-42799838.jpg?w=576',
  stats: {
    totalWasteReduced: 124,
    recyclablesCollected: 78,
    compostCreated: 32,
    streakDays: 14
  },
  achievements: [
    {
      id: 'first-sort',
      title: 'First Sort',
      description: 'Sorted your first item correctly',
      icon: 'Award',
      unlocked: true
    },
    {
      id: 'recycling-hero',
      title: 'Recycling Hero',
      description: 'Recycled 50 items in a month',
      icon: 'Trophy',
      unlocked: true
    },
    {
      id: 'compost-master',
      title: 'Compost Master',
      description: 'Created 20kg of compost',
      icon: 'Flower',
      unlocked: false
    },
    {
      id: 'zero-waste-week',
      title: 'Zero Waste Week',
      description: 'Produced no landfill waste for a week',
      icon: 'Star',
      unlocked: false
    }
  ],
  trackingData: [
    {
      date: '2025-01-01',
      recyclable: 2.1,
      compostable: 1.4,
      hazardous: 0.2,
      landfill: 0.9
    },
    {
      date: '2025-01-02',
      recyclable: 1.8,
      compostable: 1.3,
      hazardous: 0,
      landfill: 0.7
    },
    {
      date: '2025-01-03',
      recyclable: 2.3,
      compostable: 1.1,
      hazardous: 0.1,
      landfill: 0.6
    },
    {
      date: '2025-01-04',
      recyclable: 1.9,
      compostable: 1.5,
      hazardous: 0,
      landfill: 0.5
    },
    {
      date: '2025-01-05',
      recyclable: 2.4,
      compostable: 1.2,
      hazardous: 0,
      landfill: 0.4
    },
    {
      date: '2025-01-06',
      recyclable: 2.0,
      compostable: 1.3,
      hazardous: 0.3,
      landfill: 0.5
    },
    {
      date: '2025-01-07',
      recyclable: 2.2,
      compostable: 1.4,
      hazardous: 0,
      landfill: 0.3
    }
  ]
};