// app/components/atoms/Button.tsx
"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full bg-green-600 hover:bg-green-700 text-white 
      font-semibold py-2 rounded-lg transition disabled:opacity-50
      ${props.className || ""}`}
    >
      {text}
    </button>
  );
}
