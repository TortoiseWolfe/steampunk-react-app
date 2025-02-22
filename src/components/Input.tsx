import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const baseClass = "px-3 py-2 border border-copper rounded focus:outline-none focus:ring-2 focus:ring-gold";
  const computedClass = props.className ? `${baseClass} ${props.className}` : baseClass;
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium text-copper">{label}</label>
      <input {...props} className={computedClass} />
    </div>
  );
};
export default Input;
