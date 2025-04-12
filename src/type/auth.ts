// File: src/type/auth.ts
export interface AuthFormProps {
  type: "sign in" | "create account";
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string | null;
}