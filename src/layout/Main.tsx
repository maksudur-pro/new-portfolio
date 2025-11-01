import LeftSide from "../component/LeftSide";
import RightSide from "../component/RightSide";

const Main = () => {
  return (
    <div className="p-4 lg:flex">
      <div>
        <LeftSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default Main;
