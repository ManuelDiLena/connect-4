import { createContext, useContext, useState } from 'react';

const CpuContext = createContext();

export const CpuProvider = ({ children }) => {
  const [cpu, setCpu] = useState();

  return (
    <CpuContext.Provider value={{ cpu, setCpu }}>
      {children}
    </CpuContext.Provider>
  );
};

export const useCpu = () => useContext(CpuContext);
