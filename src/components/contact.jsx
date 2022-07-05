import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#000000] text-white mt-[-1px]">
      <main>
        <div>
          <div className="text-center pt-[148px] md:pt-[316px] pb-[130px] md:pb-[214px]">
            <div className="text-[35px] md:text-[81px] md:leading-[98px] leading-[42px] font-[600]">
              Contact
            </div>
            <div className="pt-[39px] text-[22px] md:text-[50px] md:leading-[61px] leading-[26px] font-[300]">
              contact@website.com
            </div>
            <div className="pt-[6px] text-[22px] md:text-[50px] md:leading-[61px] leading-[26px] font-[300]">
              +0 0000 0000
            </div>
            <div className="px-[50px] pt-[34px]">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-x-[30px] lg:gap-x-[71px] text-[#D6D6D6] max-w-[1090px] mx-auto text-[17px] leading-[21px] md:text-[23px] lg:text-[30px] md:leading-[36px]">
                <div>Twitter</div>
                <div>Youtube</div>
                <div>Dribble</div>
                <div>Linkedin</div>
                <div>Instagram</div>
                <div>Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
