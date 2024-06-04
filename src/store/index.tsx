import { breakpoints } from '@/app/utils/theme';
import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext({

});

const AppProvider = ({ children }:any) => {
  const [device, setDevice] = useState<String>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches) {
        setDevice('mobile');
      } else if (window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    // Set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ device }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };