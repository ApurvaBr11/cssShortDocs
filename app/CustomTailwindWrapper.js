"use client"
import { useEffect } from 'react';
import cssshort from '@apurvkashyap/cssshort';

const CustomCSSShortWrapper = ({ children }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = cssshort;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default CustomCSSShortWrapper;
