import React, { ReactNode, createContext, useContext, useState } from "react";

// Interfaces Imports
import {
  CreateProjectFormInterface,
  CreateProjectFormContextInterface,
} from "../interfaces";

const initialFormValue = {
  Title: "",
  Detail: "",
  "Deadline(UTC)": "",
  "Reward(USDC)": 0,
  "Lancer's Wallet Address": "",
};

// Create the context
const ProjectContext = createContext<CreateProjectFormContextInterface>({
  form: initialFormValue,
  setForm: () => {},
});

// Create the context provider component
const ProjectProvider = ({ children }: { children: ReactNode }) => {
  // State to store the form values
  const [form, setForm]: [
    form: CreateProjectFormInterface,
    setForm: React.Dispatch<React.SetStateAction<CreateProjectFormInterface>>
  ] = useState(initialFormValue);

  return (
    <ProjectContext.Provider value={{ form, setForm }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Use the context
function useProjectContext() {
  return useContext(ProjectContext);
}

export { ProjectProvider, useProjectContext }