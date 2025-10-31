import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Country = 'india' | 'nepal';

export interface CountryPricing {
  originalPrice: string;
  offerPrice: string;
  currency: string;
  symbol: string;
}

export interface CountryData {
  india: {
    name: string;
    pricing: CountryPricing;
  };
  nepal: {
    name: string;
    pricing: CountryPricing;
  };
}

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  countryData: CountryData;
  getCurrentPricing: () => CountryPricing;
  getCurrentCountryName: () => string;
}

const countryData: CountryData = {
  india: {
    name: 'India',
    pricing: {
      originalPrice: '24,999',
      offerPrice: '9,999',
      currency: 'INR',
      symbol: '₹'
    }
  },
  nepal: {
    name: 'Nepal',
    pricing: {
      originalPrice: '25,000',
      offerPrice: '12,000',
      currency: 'NPR',
      symbol: 'NPR '
    }
  }
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('india');

  const getCurrentPricing = (): CountryPricing => {
    return countryData[selectedCountry].pricing;
  };

  const getCurrentCountryName = (): string => {
    return countryData[selectedCountry].name;
  };

  const value: CountryContextType = {
    selectedCountry,
    setSelectedCountry,
    countryData,
    getCurrentPricing,
    getCurrentCountryName
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};