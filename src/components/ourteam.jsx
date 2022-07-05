import React from "react";
import TeamMember1 from "../images/teammember (1).png";

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
          <div className="mt-[51px]">
            <div>
              <img src={TeamMember1}></img>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default OurTeam;
