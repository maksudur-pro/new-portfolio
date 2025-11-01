import coding from "../assets/code.webp";
import hobbies from "../assets/hobbies.webp";
import HobbiesCard from "../reusable-component/HobbiesCard";
import Course from "./Course";
import Education from "./Education";

const Hobbies = () => {
  return (
    <>
      <Education />
      <Course />
      <div className="bg-white shadow-lg rounded-lg w-full p-2 h-1/3 font-Montserrat">
        <h3 className="text-[#4F4F4F] text-2xl font-medium">Hobbies</h3>

        <HobbiesCard
          image={hobbies}
          title="Gaming"
          description="Gaming is a passion that fuels my creativity and strategic thinking"
        />
        <HobbiesCard
          image={coding}
          title="Coding"
          description="I love diving into lines of code and solving problems"
        />
      </div>
    </>
  );
};

export default Hobbies;
