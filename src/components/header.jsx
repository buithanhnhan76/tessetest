import React from "react";

const Header = () => {
  return (
    <section className="bg-[#000000]">
      <main>
        <h1>Hello</h1>
        <div className="pl-[45px] lg:pl-[96px] pr-[36px] lg:pr-[91px] pt-[41px] lg:pt-[67px]">
          <div className="flex justify-between">
            <div className="text-white text-[14px] leading-[16px] md:text-[24px] md:leading-[29px] font-[600]">
              LOGO
            </div>
            <div className="text-white ">
              <svg
                className="md:hidden"
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H21.0286" stroke="white" stroke-width="1.05704" />
                <path
                  d="M0 5.75668H21.0286"
                  stroke="white"
                  stroke-width="1.05704"
                />
                <path
                  d="M0 10.5134H21.0286"
                  stroke="white"
                  stroke-width="1.05704"
                />
              </svg>
              <div className="hidden md:flex md:justify-between md:space-x-[60px] lg:space-x-[87px] font-[400] md:text-[20px] md:leading-[24px]">
                <div>WORK</div>
                <div>SERVICES</div>
                <div>CONTACT</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[236px] pb-[150px] md:pb-[180px] lg:pb-[240px]">
          <div className="text-white text-center max-w-[323px] md:max-w-[1190px] mx-auto text-[50px] md:text-[110px] lg:text-[162px] leading-[92.52%] md:leading-[110px] lg:leading-[134px] font-[600]">
            Creative Innovative Design Agency
          </div>
          <div className="text-[#BABABA] text-center mt-[34px] md:mt-[57px] max-w-[294px] md:max-w-[1100px] mx-auto leading-[18px] md:leading-[39px] text-[15px] md:text-[32px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;
