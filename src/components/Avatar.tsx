import React from 'react';
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}
const Avatar: React.FC<AvatarProps> = ({ size = 40, className = "", alt, ...rest }) => {
  const computedClass = `border-2 border-copper rounded-full ${className}`.trim();
  return (
    <img {...rest} alt={alt || 'Avatar'} style={{ width: size, height: size }} className={computedClass} />
  );
};
export default Avatar;
