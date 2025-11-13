import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProgramType = 'saa' | 'ml';

interface ProgramContextType {
  selectedProgram: ProgramType;
  setSelectedProgram: (program: ProgramType) => void;
  getProgramName: () => string;
  getProgramFullName: () => string;
}

const ProgramContext = createContext<ProgramContextType | undefined>(undefined);

export const ProgramProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('saa');

  const getProgramName = () => {
    switch (selectedProgram) {
      case 'saa':
        return 'AWS Solution Architect';
      case 'ml':
        return 'AWS Machine Learning';
      default:
        return 'AWS Solution Architect';
    }
  };

  const getProgramFullName = () => {
    switch (selectedProgram) {
      case 'saa':
        return 'AWS Certified Solutions Architect - Associate';
      case 'ml':
        return 'AWS Certified Machine Learning Engineer - Associate';
      default:
        return 'AWS Certified Solutions Architect - Associate';
    }
  };

  return (
    <ProgramContext.Provider value={{ selectedProgram, setSelectedProgram, getProgramName, getProgramFullName }}>
      {children}
    </ProgramContext.Provider>
  );
};

export const useProgram = () => {
  const context = useContext(ProgramContext);
  if (context === undefined) {
    throw new Error('useProgram must be used within a ProgramProvider');
  }
  return context;
};
