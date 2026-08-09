const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express", "MongoDB","SQL"],
    },
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python","JavaScript"],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl border-t-4 border-accent">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="badge badge-outline badge-lg text-center items-center">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
