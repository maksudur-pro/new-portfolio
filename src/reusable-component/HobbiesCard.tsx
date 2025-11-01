type THobbies = {
  image: string;
  title: string;
  description: string;
};

const HobbiesCard = ({ image, title, description }: THobbies) => {
  return (
    <div className="p-3">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="rounded-xl w-[602px] h-[110px] object-cover transition-all duration-700 ease-in-out blur-sm"
        onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
      />
      <h6 className="font-semibold text-lg text-[#333] mt-2">{title}</h6>
      <small className="text-[#828282] text-base font-medium">
        {description}
      </small>
    </div>
  );
};

export default HobbiesCard;
