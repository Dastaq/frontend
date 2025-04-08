'use client';
import React, { useState, useEffect } from 'react';
import Input from '../UI/input';
import { Button } from '../UI/button';
import { SUPPLIER_FORM_FIELDS, SUPPLIER_FORM_SECTIONS } from '@/app/constant/supplier/registration';


type FormData = {
  [key in keyof typeof SUPPLIER_FORM_FIELDS]: string;
};

const initialFormData: FormData = Object.keys(SUPPLIER_FORM_FIELDS).reduce((acc, key) => {
  return { ...acc, [key]: '' };
}, {} as FormData);

const SupplierRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('supplierFormSubmitted');
    if (hasSubmitted) {
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;

    setLoading(true);
    setNotification(null);

    try {
    //   // Simulate API call to backend (commented for now)
    //   await new Promise((resolve) => setTimeout(resolve, 1000));    
    //   const response = await fetch('/api/suppliers', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error(await response.text() || 'Failed to submit supplier registration');
    //   }

    //   const data = await response.json();
    //   console.log('Supplier registered:', data);
      
    //   setSubmitted(true);
    
      localStorage.setItem('supplierFormSubmitted', 'true');
      setNotification('Your data has been submitted successfully!');
    } catch (err) {
      console.error('Registration error:', err);
      setNotification(err instanceof Error ? err.message : 'Failed to submit your data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Registration Complete</h2>
          <p className="text-gray-700">
            Thank you for your submission! We'll review your information and contact you shortly.
          </p>
          {notification && (
            <p className="mt-4 text-green-600">{notification}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Become a Supplier</h2>

        {SUPPLIER_FORM_SECTIONS.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((fieldName) => {
                const field = SUPPLIER_FORM_FIELDS[fieldName as keyof typeof SUPPLIER_FORM_FIELDS];
                return field.type === 'textarea' ? (
                  <div key={fieldName} className="md:col-span-2">
                    <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <textarea
                      id={fieldName}
                      name={fieldName}
                      placeholder={field.placeholder}
                      value={formData[fieldName as keyof FormData]}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows={4}
                      required={field.required}
                    />
                  </div>
                ) : (
                  <div key={fieldName}>
                    <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <Input
                      id={fieldName}
                      name={fieldName}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[fieldName as keyof FormData]}
                      onChange={handleChange}
                      size="md"
                      variant="outline"
                      fullWidth
                      required={field.required}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          Submit Application
        </Button>

        {notification && (
          <p className={`mt-4 text-center ${notification.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
            {notification}
          </p>
        )}
      </form>
    </div>
  );
};

export default SupplierRegistrationForm;