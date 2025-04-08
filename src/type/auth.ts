interface AuthFormProps {
    type: 'login' | 'signup';
    onSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    error?: string;
  }
  