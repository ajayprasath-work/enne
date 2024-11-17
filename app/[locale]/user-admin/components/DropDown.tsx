import { Dropdown } from '@/public/assets/icon/Icon';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const DropDown: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`flex bg-[#f3fbfc] rounded py-2.5 px-4 md:min-w-[195px] min-w-52 w-full border hover:text-white hover:bg-red-850 whitespace-nowrap text-primary border-[#E7F7FA] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default DropDown;
