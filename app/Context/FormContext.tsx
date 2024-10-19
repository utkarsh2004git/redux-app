import React from 'react';

type FormDataType = Record<string, any>;

const FormContext = React.createContext<{
    formData?: FormDataType,
    setFormData?: React.Dispatch<React.SetStateAction<FormDataType>>
}>({});

export default FormContext;
