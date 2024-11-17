import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  icon?: any;
}

const Card: React.FC<CardProps> = ({ title, description, icon,  }) => {
  return (
    <div className=" flex flex-row w-full py-5 lg:py-[20px] px-5 lg:px-[24px] gap-[10px] border-[0.5px] drop-shadow-md border-[rgba(0, 0, 0, 0.20)] rounded-[12px]" >
     {icon}
      <div className="card-content">
        <h3 className="text card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
