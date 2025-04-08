

export const SUPPLIER_FORM_FIELDS = {
    businessName: {
      label: 'Business Name',
      type: 'text',
      required: true,
      placeholder: 'Pakbay Inc.',   
    },
    contactName: {
      label: 'Contact Name',
      type: 'text',
      required: true,
      placeholder: 'Muzzamil Khan',
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'muzzamil@pakbay.com',
    },
    phone: {
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: '+92 300 1234567',
    },
    address: {
      label: 'Address',
      type: 'text',
      required: true,
      placeholder: '123 Main Street',
    },
    city: {
      label: 'City',
      type: 'text',
      required: true,
      placeholder: 'Islamabad',
    },
    state: {
      label: 'State/Province',
      type: 'text',
      required: true,
      placeholder: 'Punjab',
    },
    postalCode: {
      label: 'Postal Code',
      type: 'text',
      required: true,
      placeholder: '12345',
    },
    country: {
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'Pakistan',
    },
    website: {
      label: 'Website',
      type: 'url',
      required: false,
      placeholder: 'https://pakbay.com',
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

  