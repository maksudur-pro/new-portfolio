import LeftSide from "../component/LeftSide";
import RightSide from "../component/RightSide";

const Main = () => {
  return (
    <div className="p-4 lg:flex max-w-7xl mx-auto">
      <div className="w-full lg:w-[30%]">
        <LeftSide />
      </div>
      <div className="w-full lg:w-[70%]">
        <RightSide />
      </div>
    </div>
  );
};

export default Main;
