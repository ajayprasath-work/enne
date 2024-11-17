import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    disabled?: boolean;
}

const DropDownCheck: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`flex bg-[#f3fbfc] items-center gap-4 rounded py-2.5 px-4 group min-w-[205px] border hover:text-white hover:bg-primary text-primary border-[#E7F7FA] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            <input
                type="checkbox"
                className="flex items-center justify-center appearance-none w-4 h-4 bg-transparent border-2 group-hover:border-white border-primary relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-primary before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
            />
            {label}
        </button>
    );
};

export default DropDownCheck;
