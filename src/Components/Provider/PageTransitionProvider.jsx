// components/PageTransitionProvider.js
import { createContext, useContext } from "react";

// StepContext for managing the step globally
const StepContext = createContext();

export const useStep = () => useContext(StepContext);

export const PageTransitionProvider = ({ children }) => {
  const step = 4;

  return (
    <StepContext.Provider value={{ step }}>
      {children}
    </StepContext.Provider>
  );
};

// In PageTransitionProvider.js
export default PageTransitionProvider;
