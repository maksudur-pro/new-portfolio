import nu from "../assets/nu.webp";

const Education = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-2 h-1/3 font-Montserrat my-2">
      <h3 className="text-[#4F4F4F] text-2xl font-medium">Education</h3>
      <div className="flex gap-4 items-center p-3 my-2">
        <img src={nu} loading="lazy" className=" w-[49px]" alt="" />

        <div>
          <h6 className="font-semibold text-[#333] text-base ">
            Bachelor of Social Science
          </h6>
          <p className="text-base font-medium text-[#828282] ">
            National University
          </p>
          <p className="text-[#828282] font-medium">Sep 2021 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
