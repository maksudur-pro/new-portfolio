import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import joy from "../assets/joy.webp";

const Card = () => {
  return (
    <div className="bg-white w-full font-Montserrat text-left overflow-hidden shadow-lg rounded-lg mb-6 p-6">
      <figure>
        <img
          src={joy}
          width={318}
          height={395}
          loading="eager"
          fetchPriority="high"
          alt="Maksudur Rahman Joy"
          className=" rounded-md w-full h-auto object-cover "
        />

        <figcaption className="mt-4 ">
          <h2 className="font-semibold text-[#4F4F4F] text-2xl sm:text-xl">
            Maksudur Rahman Joy
          </h2>
          <p className="text-lg font-medium text-[#828282]">
            Mern Stack Developer
          </p>
        </figcaption>
      </figure>
      <div className="my-4 ">
        <a
          href="mailto:maksudurjoy7@gmail.com"
          className=" text-lg flex gap-2  font-medium items-center text-blue-800">
          <MdEmail />
          maksudurjoy7@gmail.com
        </a>
        <a
          href="tel:+8801721308663"
          className="text-lg text-blue-800 font-medium items-center flex gap-2">
          <FaPhoneAlt /> +880 1721 308663
        </a>
        <a
          href="https://github.com/maksudur-pro"
          className="text-lg text-blue-800 font-medium items-center flex gap-2">
          <FaGithub /> maksudur-pro
        </a>
      </div>

      <p className="text-lg font-medium text-[#828282] mb-4 ">
        I&apos;m a driven developer passionate about creating exceptional UI
        applications through continuous learning and innovation.
      </p>
    </div>
  );
};

export default Card;
