import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  // Steampunk button with a gradient background and shadow
  const baseClass = "px-6 py-3 bg-gradient-to-r from-copper to-bronze text-ivory font-bold uppercase tracking-wide rounded-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gold";
  const computedClass = props.className ? `${baseClass} ${props.className}` : baseClass;
  return (
    <button {...props} className={computedClass}>
      {label}
    </button>
  );
};
export default Button;
