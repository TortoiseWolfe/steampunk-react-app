import React from 'react';
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ title, content, footer, className, ...props }) => {
  const baseClass = "border border-copper rounded shadow p-4 bg-ivory";
  const computedClass = className ? `${baseClass} ${className}` : baseClass;
  return (
    <div className={computedClass} {...props}>
      <h2 className="text-xl font-bold mb-2 text-copper">{title}</h2>
      <div className="mb-4">{content}</div>
      {footer && <div className="border-t border-copper pt-2 text-sm text-copper">{footer}</div>}
    </div>
  );
};
export default Card;
