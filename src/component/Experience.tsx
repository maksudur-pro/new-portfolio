import redon from "../assets/redon.webp";
import sohayika from "../assets/sohayika.webp";

const Experience = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-2 font-Montserrat">
      <h3 className="text-[#4F4F4F] text-2xl font-medium">Experience</h3>

      <div className="flex gap-4 items-center p-3 mt-2">
        <img src={redon} loading="lazy" className=" w-[49px]" alt="" />

        <div>
          <h6 className="font-semibold text-[#333] text-base ">
            Redon Solutions Pvt Ltd
          </h6>
          <p className="text-base font-medium text-[#828282] ">
            Front-end developer
          </p>
          <p className="text-[#828282] font-medium">July 2023 - Jun 2024</p>
        </div>
      </div>
      <div className="flex gap-4 items-center p-3 mb-2">
        <img src={sohayika} loading="lazy" className=" w-[49px]" alt="" />

        <div>
          <h6 className="font-semibold text-[#333] text-base ">
            Sohayika - সহায়িকা
          </h6>
          <p className="text-base font-medium text-[#828282] ">
            Data Entry Operator
          </p>
          <p className="text-[#828282] font-medium">May 2020 - Jan 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
