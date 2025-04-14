// file: src/components/ui/tabs.tsx
"use client"

import * as React from "react"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider")
  }
  return context
}

export function Tabs({ 
  defaultValue, 
  value, 
  onValueChange, 
  children, 
  className, 
  ...props 
}: TabsProps) {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "")

  const handleValueChange = (newValue: string) => {
    setTabValue(newValue)
    onValueChange?.(newValue)
  }

  // Sync with controlled value
  React.useEffect(() => {
    if (value !== undefined) setTabValue(value)
  }, [value])

  return (
    <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
      <div className={`w-full ${className || ""}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div
      className={`inline-flex h-12 items-center justify-center rounded-md bg-white p-1 text-slate-600 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
}

export function TabsTrigger({ className, value, children, ...props }: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = useTabsContext()
  const isActive = selectedValue === value

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-all ${
        isActive 
          ? "bg-blue-500 text-white shadow" 
          : "hover:bg-blue-50 text-slate-600"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className || ""}`}
      onClick={() => onValueChange(value)}
      data-state={isActive ? "active" : "inactive"}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  children: React.ReactNode
}

export function TabsContent({ className, value, children, ...props }: TabsContentProps) {
  const { value: selectedValue } = useTabsContext()
  if (selectedValue !== value) return null

  return (
    <div
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className || ""}`}
      data-state="active"
      {...props}
    >
      {children}
    </div>
  )
}