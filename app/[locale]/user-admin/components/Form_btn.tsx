import React from 'react';

interface ButtonProps {
  label: string;
  bg: string;
  border: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Form_btn: React.FC<ButtonProps> = ({ label, onClick, disabled, bg, text, border }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-1/2 bg-${bg} text-${text} justify-center px-5 py-3 rounded-lg border border-${border} text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Form_btn;
