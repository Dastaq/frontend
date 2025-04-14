import { LabelProps } from "@/type/Lable"


export function Label({ 
  className,
  children,
  required = false,
  ...props 
}: LabelProps) {
  // The Label component is a styled label element that can be used in forms.
  return (
    <label
      className=
        "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}