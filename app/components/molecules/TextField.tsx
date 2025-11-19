// app/components/molecules/TextField.tsx
"use client";

import Label from "@/app/components/atoms/Label";
import Input from "@/app/components/atoms/Input";

interface TextFieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  htmlFor?: string;
}

export default function TextField({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  htmlFor,
}: TextFieldProps) {
  return (
    <div className="mb-4">
      <Label text={label} htmlFor={htmlFor} />

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        id={htmlFor}
      />
    </div>
  );
}
