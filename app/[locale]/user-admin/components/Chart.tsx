import React from 'react';

const ChartOverview = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = [20000, 50000, 30000, 6000, 10000, 50000, 35000, 4000, 9000, 1000,2000, 1000]; // Sample data, modify as needed
  const colors=["#ed1c2499","#cb000cb3","#aa0000cc","#6d0000cc"]
  const maxValue =50000 ; // Find the maximum value
  const maxHeight = 100; // Maximum bar height in pixels

  const getRandomColorFromSet = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="h-full  lg:px-6 pt-2.5 pb-6 bg-[#f7f9fb] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
      <div className="rounded-lg flex-col justify-center items-start flex">
        <div className="self-stretch text-[#1c1c1c] text-3xl lg:text-xl font-bold leading-7 tracking-tight">
          Overview
        </div>
      </div>
      <div className="lg:h-[90%] w-full justify-start lg:mt-0 mt-0 md:mt-8  items-start gap-4 inline-flex">
        <div className="self-stretch lg:gap-0 md:gap-8 gap-5 flex-col justify-between items-end mb-[12px] inline-flex">
          {['50,000', '40,000', '30,000', '20,000', '10,000', '0'].map((value, index) => (
            <div key={index} className="text-right text-[#043156] text-xs md:text-xl  lg:text-xs font-medium leading-none tracking-tight">
              {value}
            </div>
          ))}
        </div>

        <div className="self-stretch flex-col w-full  justify-start items-start inline-flex">
          <div className="h-full  pb-2.5 flex w-full  flex-row justify-between items-end ">
            {values.map((value, index) => {
                const barHeight = (value / maxValue) * maxHeight; 
                const randomColor = getRandomColorFromSet(); 

                return(
              <div key={index} style={{height:`${barHeight}%`,backgroundColor:randomColor}} className="w-[20px] md:w-[40px] lg:w-[40px] rounded-tl-[5px] rounded-tr-[5px]  flex-col bg-[#043156] justify-end items-center inline-flex">
                {/* <div
                  className={`self-stretch grow shrink basis-0 bg-opacity-${index * 10} ${
                    value > 3000 ? 'bg-[#043156]' : 'bg-[#c7b7d8]'
                  } rounded-tl-[5px] rounded-tr-[5px]`}
                  style={{ height: `${(value / 50000) * 100}%` }} // Adjust height based on value
                ></div> */}
                <div className="px-2 py-1 opacity-0 bg-[#1c1c1c]/80 rounded-lg backdrop-blur-2xl justify-start items-center gap-1 inline-flex">
                  <div className="rounded-lg flex-col justify-center items-start gap-2 inline-flex">
                    <div className="self-stretch text-white text-xs font-normal leading-[18px]">{value}</div>
                  </div>
                </div>
              </div>
            )})}
          </div>

          <div className="flex w-full  flex-row justify-between items-center ">
            {months.map((month, index) => (
              <div
                key={index}
                className="w-[40px] text-center text-[#041b37] text-xs font-medium leading-none tracking-tight"
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOverview;
