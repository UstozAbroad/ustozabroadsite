
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { University, Mentor, Scholarship } from '../types';

interface DataContextType {
  universities: University[];
  mentors: Mentor[];
  scholarships: Scholarship[];
  addUniversity: (uni: University) => void;
  deleteUniversity: (id: string) => void;
  addMentor: (mentor: Mentor) => void;
  deleteMentor: (id: string) => void;
  addScholarship: (scholarship: Scholarship) => void;
  deleteScholarship: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const INITIAL_UNIVERSITIES: University[] = [
  { id: '1', name: 'Oxford University', country: 'United Kingdom', ranking: 1, programs: ['Computer Science', 'Business'], image: 'https://picsum.photos/seed/oxford/400/250' },
  { id: '2', name: 'MIT', country: 'United States', ranking: 2, programs: ['Engineering', 'Data Science'], image: 'https://picsum.photos/seed/mit/400/250' },
  { id: '3', name: 'University of Tokyo', country: 'Japan', ranking: 28, programs: ['Robotics', 'Management'], image: 'https://picsum.photos/seed/tokyo/400/250' },
];

const INITIAL_MENTORS: Mentor[] = [
  { id: '1', name: 'Abdurakhmon J.', university: 'Harvard University', country: 'USA', specialization: 'Computer Science', rating: 4.9, price: 15, image: 'https://picsum.photos/seed/abdu/200/200' },
  { id: '2', name: 'Shakhzoda M.', university: 'Technical University Berlin', country: 'Germany', specialization: 'Renewable Energy', rating: 5.0, price: 10, image: 'https://picsum.photos/seed/shax/200/200' },
];

const INITIAL_SCHOLARSHIPS: Scholarship[] = [
  { id: '1', title: 'Chevening Scholarship', provider: 'UK Government', amount: 'Full Tuition + Stipend', deadline: '2024-11-05', tags: ['UK', 'Master'] },
  { id: '2', title: 'DAAD Scholarship', provider: 'Germany', amount: 'Full Tuition + Health', deadline: '2024-10-15', tags: ['Germany', 'Master', 'PhD'] },
];

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [universities, setUniversities] = useState<University[]>(INITIAL_UNIVERSITIES);
  const [mentors, setMentors] = useState<Mentor[]>(INITIAL_MENTORS);
  const [scholarships, setScholarships] = useState<Scholarship[]>(INITIAL_SCHOLARSHIPS);

  const addUniversity = (uni: University) => setUniversities(prev => [...prev, uni]);
  const deleteUniversity = (id: string) => setUniversities(prev => prev.filter(u => u.id !== id));

  const addMentor = (mentor: Mentor) => setMentors(prev => [...prev, mentor]);
  const deleteMentor = (id: string) => setMentors(prev => prev.filter(m => m.id !== id));

  const addScholarship = (s: Scholarship) => setScholarships(prev => [...prev, s]);
  const deleteScholarship = (id: string) => setScholarships(prev => prev.filter(s => s.id !== id));

  return (
    <DataContext.Provider value={{
      universities, mentors, scholarships,
      addUniversity, deleteUniversity,
      addMentor, deleteMentor,
      addScholarship, deleteScholarship
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
