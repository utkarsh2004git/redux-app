import React, { useState } from 'react';
import FormContext from './FormContext';


type FormDataType = Record<string, any>;

// Define the props for FormProvider



const FormProvider = ({ children }:{children: React.ReactNode}) => {
  const [formData, setFormData] = useState<FormDataType>({});

  return (
    <FormContext.Provider value={{ formData: formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
