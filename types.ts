
export enum Language {
  UZ = 'uz',
  RU = 'ru',
  EN = 'en'
}

export interface University {
  id: string;
  name: string;
  country: string;
  ranking: number;
  programs: string[];
  image: string;
}

export interface Mentor {
  id: string;
  name: string;
  university: string;
  country: string;
  specialization: string;
  rating: number;
  price: number;
  image: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  tags: string[];
}

export interface Consultation {
  id: string;
  mentorId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed';
}
