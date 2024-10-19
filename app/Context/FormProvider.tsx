import React, { useState } from 'react';
import FormContext from './FormContext';


type FormDataType = Record<string, any>;

// Define the props for FormProvider
interface FormProviderProps {
  children: React.ReactNode;
}

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormDataType>({});

  return (
    <FormContext.Provider value={{ formData: formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
