import { createContext } from "react";

interface ContextType {
  activeStep: number;
  setActiveStep?: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  steps: String[];
}
const AppContext = createContext({} as ContextType);

export default AppContext;
