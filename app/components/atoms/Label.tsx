// app/components/atoms/Label.tsx
"use client";

interface LabelProps {
  text: string;
  htmlFor?: string;
}

export default function Label({ text, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-semibold text-gray-700"
    >
      {text}
    </label>
  );
}
