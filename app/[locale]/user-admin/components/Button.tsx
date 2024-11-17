import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, leftIcon, rightIcon, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between gap-[12px] h-fit py-[16px] xl:h-full w-full md:w-fit text-nowrap px-[24px] items-center border-[0.5px] border-[rgba(0, 0, 0, 0.20)] rounded-[5px] text-[16px] font-[500] text-[#000] leading-[24px]  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
