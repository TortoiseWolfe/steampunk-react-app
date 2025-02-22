import React from 'react';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children, className, ...props }) => {
  if (!isOpen) return null;
  const baseClass = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50";
  const computedClass = className ? `${baseClass} ${className}` : baseClass;
  return (
    <div className={computedClass} {...props}>
      <div className="bg-ivory rounded shadow-lg max-w-md w-full p-4">
        <div className="flex justify-between items-center border-b border-copper pb-2 mb-4">
          <h3 className="text-lg font-semibold text-copper">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
