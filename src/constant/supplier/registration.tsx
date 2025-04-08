

export const SUPPLIER_FORM_FIELDS = {
    businessName: {
      label: 'Business Name',
      type: 'text',
      required: true,
      placeholder: 'Your company name',
    },
    contactName: {
      label: 'Contact Name',
      type: 'text',
      required: true,
      placeholder: 'Your full name',
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'contact@yourcompany.com',
    },
    phone: {
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: '+1 (123) 456-7890',
    },
    address: {
      label: 'Address',
      type: 'text',
      required: true,
      placeholder: '123 Business St',
    },
    city: {
      label: 'City',
      type: 'text',
      required: true,
      placeholder: 'New York',
    },
    state: {
      label: 'State/Province',
      type: 'text',
      required: true,
      placeholder: 'NY',
    },
    postalCode: {
      label: 'Postal Code',
      type: 'text',
      required: true,
      placeholder: '10001',
    },
    country: {
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'United States',
    },
    website: {
      label: 'Website',
      type: 'url',
      required: false,
      placeholder: 'https://yourcompany.com',
    },
    productCategories: {
      label: 'Product Categories',
      type: 'text',
      required: true,
      placeholder: 'Electronics, Apparel, etc.',
    },
    annualRevenue: {
      label: 'Annual Revenue (USD)',
      type: 'number',
      required: true,
      placeholder: '1000000',
    },
    businessDescription: {
      label: 'Business Description',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us about your business',
    },
  };
  
  export const SUPPLIER_FORM_SECTIONS = [
    {
      title: 'Business Information',
      fields: ['businessName', 'contactName', 'email', 'phone'],
    },
    {
      title: 'Address Information',
      fields: ['address', 'city', 'state', 'postalCode', 'country', 'website'],
    },
    {
      title: 'Business Details',
      fields: ['productCategories', 'annualRevenue', 'businessDescription'],
    },
  ];

  