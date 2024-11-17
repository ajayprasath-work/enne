import { Dropdown } from '@/public/assets/icon/Icon';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  path?:string;
}

const DropDown: React.FC<ButtonProps> = ({ label, onClick, disabled,path }) => {
  console.log(path);
  return (
    <a href={path} target='_blank'
      onClick={onClick}
      className={`flex  rounded py-2.5 px-4 min-w-[195px] border hover:text-white hover:bg-primary text-primary border-[#E7F7FA] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      
    >
      {label}
    </a>
  );
};

export default DropDown;
