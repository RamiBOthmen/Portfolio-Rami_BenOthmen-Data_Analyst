import Section from "@/components/Section";
import Image from "next/image";

export default function SkillsPage() {
  const certifications = [
    {
      name: "Google Data Analytics Certificate",
      image: "data_analysis.png"
    },
    {
      name: "MTA: Python Programming Fundamentals",
      image: "python.png"
    },
    {
      name: "SQL Advanced (Hackerrank)",
      image: "sql-a.png"
    },
    {
      name: "Microsoft Office Excel Specialist",
      image: "excel.png"
    },
    {
      name: "Microsoft Office Word Specialist",
      image: "word.png"
    },
    {
      name: "Microsoft Office PowerPoint Specialist",
      image: "ppt.png"
    },
    {
      name: "Advanced C1 English Certificate (EF SET)",
      image: "ef-set.png"
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      image: "ai.png"
    },
    // {
    //   name: "Microsoft Azure Data Fundamentals",
    //   image: "data.png"
    // },
    {
      name: "Agile SCRUM (SCRUM Study)",
      image: "scrum.png"
    },
  ];

  return (
    <div className="py-8">
      <Section title="Technical Skills">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Spreadsheets (MS Excel, Google Sheets)","SQL (SQL Server, MySQL, PostgreSQL)", "Tableau, Power BI", "R",
            "Python", "ETL  (Extract, Transform, Load)", "NoSQL (MongoDB)", "SCRUM", "Git / GitHub",
          ].map((skill) => (
            <li key={skill} className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">{skill}</li>
          ))}
        </ul>
      </Section>

      <Section title="Soft Skills">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {["Teamwork", "Communication", "Analytical Thinking"].map((skill) => (
            <li key={skill} className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">{skill}</li>
          ))}
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <li key={cert.name} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={`/assets/projects/${cert.image}`}
                  alt={`${cert.name} certificate`}
                  width={200}
                  height={150}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 mb-3 w-full h-auto"
                />
                <p className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
} 