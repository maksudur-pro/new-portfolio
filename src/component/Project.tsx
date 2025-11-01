import searchtutorbd from "../assets/searchtutorbd.webp";
import musicland from "../assets/musicland.webp";
import toypal from "../assets/toypal.webp";
import ProjectItem from "../reusable-component/ProjectItem";

const Project = () => {
  const projects = [
    {
      image: searchtutorbd,
      title: "Search Tutor",
      description:
        "A comprehensive tutor-finding platform with role-based dashboards for students, tutors, and admins. Features include tuition request posting, job applications, real-time status updates, and secure authentication.",
      code: "https://github.com/maksudur-pro/search-tutor",
      server: "https://github.com/maksudur-pro/search-tutor-server",
      demo: "https://searchtutorbd.com/",
      // language:
      //   "React.js, React Router, Tailwind, DaisyUI, Sweetalert2, AXIOS, CORS, Lucide Icons, Cloudinary, JWT, Node JS, Express JS, MongoDB, Firebase, Dotenv",
    },
    {
      image: musicland,
      title: "MusicLand",
      description:
        "MusicLand is a music instrument learning summer school website offering secure login with role-based dashboards. Students can delete or pay for classes and view paid ones. Admins approve or deny classes, manage user roles, and delete users. Instructors can add or delete classes, pending admin approval.",
      code: "https://github.com/maksudur-pro/musicland_client",
      server: "https://github.com/maksudur-pro/musicland_server",
      demo: "https://music-land-f12e8.web.app/",
      // language: "JS",
    },
    {
      image: toypal,
      title: "ToyPal",
      description:
        "It’s a toy market place website. ToyPal offers a comprehensive platform for sellers to add toys and maintain complete privacy over their listings. Sellers have the exclusive ability to view and manage their added toys, with options to easily update or remove them. ToyPal provides a secure login and registration system for sellers, ensuring a smooth and secure interactive experience throughout the website.",
      code: "https://github.com/maksudur-pro/toy-pal-client",
      server: "https://github.com/maksudur-pro/toy-pal-server",
      demo: "https://toy-pal.web.app/",
      // language: "JS",
    },
  ];

  return (
    <div className="text-left font-Montserrat">
      <h5 className="bg-white text-[#4F4F4F] font-medium text-lg p-4 mb-4 rounded-lg shadow-lg">
        Projects ({projects.length})
      </h5>

      <div className="container">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Project;
