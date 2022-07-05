import React from "react";
import TeamMember1 from "../images/teammember (1).png";
import TeamMember2 from "../images/teammember (2).png";
import TeamMember3 from "../images/teammember (3).png";
import TeamMember4 from "../images/teammember (4).png";

const OurTeam = () => {
  return (
    <section>
      <main>
        <div>
          <div className="text-center">
            <div className="font-[600] text-[35px] leading-[42px]">
              Our Team
            </div>
            <div className="font-[600] mt-[15px] text-[13px] leading-[16px] max-w-[278px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
          <div className="mt-[51px] md:w-[25%] md:inline-block">
            <div className="relative group">
              <img src={TeamMember1}></img>
              <div className="absolute bottom-0 left-0 bg-white max-w-[237px] md:max-w-[100%] w-full pl-[12px] pt-[8px] pb-[13px] md:hidden group-hover:block">
                <div className="font-[700] text-[21px] leading-[25px]">
                  Jhon Doe
                </div>
                <div className="leading-[16px] text-[13px] font-[600] text-[#5E5E5E]">
                  Digital Marketing Manager
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] md:inline-block">
            <div className="relative group">
              <img src={TeamMember2}></img>
              <div className="absolute bottom-0 left-0 bg-white max-w-[237px] md:max-w-[100%] w-full pl-[12px] pt-[8px] pb-[13px] md:hidden group-hover:block">
                <div className="font-[700] text-[21px] leading-[25px]">
                  Jhon Doe
                </div>
                <div className="leading-[16px] text-[13px] font-[600] text-[#5E5E5E]">
                  Digital Marketing Manager
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] md:inline-block">
            <div className="relative group">
              <img src={TeamMember3}></img>
              <div className="absolute bottom-0 left-0 bg-white max-w-[237px] md:max-w-[100%] w-full pl-[12px] pt-[8px] pb-[13px] md:hidden group-hover:block">
                <div className="font-[700] text-[21px] leading-[25px]">
                  Jhon Doe
                </div>
                <div className="leading-[16px] text-[13px] font-[600] text-[#5E5E5E]">
                  Digital Marketing Manager
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] md:inline-block">
            <div className="relative group">
              <img src={TeamMember4}></img>
              <div className="absolute bottom-0 left-0 bg-white max-w-[237px] md:max-w-[100%] w-full pl-[12px] pt-[8px] pb-[13px] md:hidden group-hover:block">
                <div className="font-[700] text-[21px] leading-[25px]">
                  Jhon Doe
                </div>
                <div className="leading-[16px] text-[13px] font-[600] text-[#5E5E5E]">
                  Digital Marketing Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default OurTeam;
