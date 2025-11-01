import ph from "../assets/ph.svg";

const Course = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-2 h-1/3 font-Montserrat my-2">
      <h3 className="text-[#4F4F4F] text-2xl font-medium">Course</h3>
      <div className="flex gap-4 items-center p-3 my-2">
        <img loading="lazy" src={ph} className=" w-[70px]" alt="" />

        <div>
          <h6 className="font-semibold text-[#333] text-base ">
            Complete Web Development Course
          </h6>
          <p className="text-base font-medium text-[#828282] ">
            Programming Hero
          </p>
          <p className="text-[#828282] font-medium">Jan 2023 - June 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
