import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#000000] md:bg-[#ffffff] text-white md:text-black mt-[-1px]">
      <main>
        <div>
          <div className="md:flex md:justify-between md:py-[32px] md:pl-[95px] md:pr-[107px]">
            <div className="hidden md:block md:text-[20px] md:font-[400] md:leading-[24px]">
              2022 Creatives
            </div>
            <div className="md:flex md:justify-between md:space-x-[56px] text-center text-[10px] leading-[12px] font-[200] md:text-[20px] md:font-[400] md:leading-[24px]">
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
            </div>
          </div>
        </div>
        <div className="md:hidden text-[10px] font-[800] leading-[12px] text-center py-[26px]">
          <div>2022 CompanyName</div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
