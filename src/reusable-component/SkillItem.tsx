import type React from "react";

type TItem = {
  icon: React.ReactNode;
  name: string;
};

const SkillItem = ({ icon, name }: TItem) => {
  return (
    <div className="flex gap-1 items-center transition-transform hover:scale-110">
      {icon}
      <span className="text-[#4F4F4F] font-medium">{name}</span>
    </div>
  );
};

export default SkillItem;
