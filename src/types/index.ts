export interface WasteType {
  id: string;
  name: string;
  category: 'recyclable' | 'compostable' | 'hazardous' | 'landfill';
  icon: string;
  description: string;
  disposalInstructions: string;
  environmentalImpact: string;
}

export interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  acceptedItems: string[];
  hours: string;
  phone: string;
  website?: string;
}

export interface WasteTrackingData {
  date: string;
  recyclable: number;
  compostable: number;
  hazardous: number;
  landfill: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  avatar: string;
  stats: {
    totalWasteReduced: number;
    recyclablesCollected: number;
    compostCreated: number;
    streakDays: number;
  };
  achievements: Achievement[];
  trackingData: WasteTrackingData[];
}