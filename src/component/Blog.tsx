import blog from "../assets/image.webp";

const Blog = () => {
  return (
    <div className="text-left font-Montserrat">
      <h5 className="bg-white font-medium text-lg text-[#4F4F4F]  p-4 mb-4 rounded-lg shadow-lg">
        Blog (1)
      </h5>
      <div className="bg-white font-Montserrat p-4 m-4 shadow-lg rounded-lg lg:flex md:flex gap-4">
        <div className="lg:w-1/2 md:w-1/2 ml-2">
          <small className="text-base text-[#E0E0E0]">Blog</small>
          <h3 className="text-[#333] text-2xl font-medium my-4">
            JavaScript <br /> FizzBuzz Solutions
          </h3>
          <p className="text-base font-medium text-[#828282] pb-6">
            In this article I tell the story about JavaScript FizzBuzz
            Solutions. Here i am trying to solve many type also i describe the
            all solutions. this article offers valuable insights into different
            strategies for tackling the classic FizzBuzz problem in JavaScript.
          </p>

          <a
            className="text-[#2F80ED] text-base font-medium"
            href="https://maksudur.hashnode.dev/javascript-fizzbuzz-solutions">
            hashnode.dev
          </a>
        </div>
        <div className="lg:w-1/2 md:w-1/2 mr-4">
          <img
            src={blog}
            loading="lazy"
            alt="alt"
            className="rounded-lg w-full h-full transition-all duration-700 ease-in-out blur-sm"
            onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
