import type React from "react";

type TButtonProps = {
  href: string;
  children: React.ReactNode;
};

const Button = ({ href, children }: TButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-[#2F80ED] hover:text-white bg-white flex items-center justify-center text-blue-500 text-lg rounded-xl w-[100px] h-[40px] border-2 border-blue-500">
      {children}
    </a>
  );
};

export default Button;
