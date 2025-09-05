import { motion } from "motion/react";

const Services = () => {
  const experiences = [
    {
      id: 1,
      company: "Flight Expert Ltd.",
      position: "Software Developer",
      duration: "Oct 2022 - Apr 2024",
      location: "Motijheel, Dhaka",
      description:
        "building responsive web apps, developing reusable components, and resolving live-site issues on high-traffic platforms",
      technologies: ["React", "Next Js", "Bootstrap", "REST APIs"],
      achievements: [
        "Built responsive web apps with React & JavaScript",
        "Developed reusable UI components & optimized performance",
        "Handled production bugs to ensure site stability",
      ],
    },
    {
      id: 2,
      company: "Innalytx.",
      position: "Frontend Developer Intern",
      duration: "Feb 2022 - May 2022",
      location: "Remote",
      description:
        "Assisted in developing and maintaining responsive web applications using React and modern frontend technologies during internship",
      technologies: ["React", "Ant Design", "Redux", "REST APIs"],
      achievements: [
        "Built responsive web apps with React & JavaScript",
        "Assisted in developing UI components and features",
        "Worked with Git, debugging, and cross-browser fixes",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Professional
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" text-5xl text-gray-900 mb-4 "
        >
          Experience
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-lime-500 mx-auto rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-lime-100 p-6 border-b border-gray-100">
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exp.position}
                </h3>
                <p className="text-lg font-medium text-lime-700 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-gray-500 to-lime-500 group-hover:from-gray-600 group-hover:to-lime-700 transition-all duration-300"></div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
