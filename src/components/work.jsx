import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Project4 from "../images/Project4.png";
import Project5 from "../images/Project5.png";
import Project6 from "../images/Project6.png";

const Work = () => {
  return (
    <section className="bg-[#000000]">
      <main>
        <div>
          <div className="text-white text-center pb-[56px] leading-[41.85px] text-[34.58px]">
            Work
          </div>
          <div className="w-full relative">
            <img src={Project1} className="w-full"></img>
            <div className="bg-[#ffffff] max-w-[229px] text-[11px] leading-[13px] pt-[11px] pl-[19px] pr-[11px] pb-[14px] absolute bottom-0 left-0">
              <div className="font-[700]">Abstract Design</div>
              <div className="font-[300] text-[6px] leading-[7.26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="w-[81.29px] h-[4.56px] bg-[#ffffff] mx-auto my-[13px]"></div>
          <div className="w-full relative">
            <img src={Project2} className="w-full"></img>
            <div className="bg-[#ffffff] max-w-[229px] text-[11px] leading-[13px] pt-[11px] pl-[19px] pr-[11px] pb-[14px] absolute bottom-0 right-0">
              <div className="font-[700]">Abstract Design</div>
              <div className="font-[300] text-[6px] leading-[7.26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="w-[81.29px] h-[4.56px] bg-[#ffffff] mx-auto my-[13px]"></div>
          <div className="w-full relative">
            <img src={Project2} className="w-full"></img>
            <div className="bg-[#ffffff] max-w-[229px] text-[11px] leading-[13px] pt-[11px] pl-[19px] pr-[11px] pb-[14px] absolute bottom-0 left-0">
              <div className="font-[700]">Abstract Design</div>
              <div className="font-[300] text-[6px] leading-[7.26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Work;
