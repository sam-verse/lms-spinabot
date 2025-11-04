import React from 'react';

export const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-2xl shadow-sm p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-semibold text-black ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`pt-2 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
