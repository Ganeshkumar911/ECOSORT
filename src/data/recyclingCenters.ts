import { RecyclingCenter } from '../types';

export const recyclingCenters: RecyclingCenter[] = [
  {
    id: 'rc1',
    name: 'EcoRecycle Center',
    address: '123 Green Street, Eco City, EC 12345',
    acceptedItems: ['plastic', 'paper', 'glass', 'electronics', 'batteries'],
    hours: 'Mon-Sat: 8AM-6PM, Sun: 10AM-4PM',
    phone: '(555) 123-4567',
    website: 'https://example.com/ecorecycle'
  },
  {
    id: 'rc2',
    name: 'GreenPath Recycling',
    address: '456 Earth Avenue, Sustainable Town, ST 67890',
    acceptedItems: ['plastic', 'paper', 'glass', 'yard-waste'],
    hours: 'Mon-Fri: 7AM-7PM, Sat: 9AM-5PM',
    phone: '(555) 987-6543',
    website: 'https://example.com/greenpath'
  },
  {
    id: 'rc3',
    name: 'Hazardous Waste Facility',
    address: '789 Safety Road, Careful City, CC 54321',
    acceptedItems: ['batteries', 'electronics', 'chemicals'],
    hours: 'Tue-Thu: 9AM-5PM, Sat: 10AM-2PM',
    phone: '(555) 456-7890'
  },
  {
    id: 'rc4',
    name: 'Community Compost Center',
    address: '321 Fertile Lane, Garden Grove, GG 13579',
    acceptedItems: ['food-waste', 'yard-waste'],
    hours: 'Wed: 12PM-6PM, Sat-Sun: 9AM-3PM',
    phone: '(555) 234-5678',
    website: 'https://example.com/communitycompost'
  }
];