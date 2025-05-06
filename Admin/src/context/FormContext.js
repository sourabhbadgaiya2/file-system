// src/context/FormContext.js
import React, { createContext, useState } from 'react';

// Context create karna
export const FormContext = createContext();

// Context Provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    BasicDetails: {},
    LocationDetails: {},
    PropertyDetails: {},
    UnitsDetails: {},
    OtherDetails: {},
    BoundaryDetails: {}
  });

  const handleDataChange = (section, data) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: data
    }));
  };

  const resetForm = () => {
    setFormData({
      BasicDetails: {},
      LocationDetails: {},
      PropertyDetails: {},
      UnitsDetails: {},
      OtherDetails: {},
      BoundaryDetails: {}
    });
  };

  return (
    <FormContext.Provider value={{ formData, handleDataChange, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
