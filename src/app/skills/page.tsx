import Section from "@/components/Section";
import Image from "next/image";

export default function SkillsPage() {
  const certifications = [
    {
      name: "Google Data Analytics Certificate",
      image: "../certificates/../certificates/google_data_analysis.png",
      url: "https://www.credly.com/badges/9e506f5f-a223-43b2-9b57-16d3297a3aee/public_url"
    },
    {
      name: "MTA: Python Programming Fundamentals",
      image: "../certificates/../certificates/python.png",
      url: "https://www.credly.com/badges/5d005f88-2707-4bc4-993a-ca1eac590f83"
    },
    {
      name: "SQL Advanced (Hackerrank)",
      image: "../certificates/sql-a.png",
      url: "https://www.hackerrank.com/certificates/c15b1ab417f7"
    },
    {
      name: "Microsoft Office Excel Specialist",
      image: "../certificates/excel.png",
      url: "https://drive.google.com/file/d/1tThXoxvRTpurggEY63joP_MtwdzQyvSK/view"
    },
    {
      name: "Microsoft Office Word Specialist",
      image: "../certificates/word.png",
      url: "https://drive.google.com/file/d/1CwO2w64X8ILLwIiqkAjoQ-OA6GzXukv-/view"
    },
    {
      name: "Microsoft Office PowerPoint Specialist",
      image: "../certificates/ppt.png",
      url: "https://drive.google.com/file/d/14-4rzRgd8rFRJVWcInBzuXToZhct5dsu/view"
    },
    {
      name: "Advanced C1 English Certificate (EF SET)",
      image: "../certificates/ef-set.png",
      url: "https://cert.efset.org/nSv366"
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      image: "../certificates/ai.png",
      url: "https://www.credly.com/badges/fe102da5-9ea8-4ae8-886b-8e08a0590ce7/linked_in_profile"
    },
    // {
    //   name: "Microsoft Azure Data Fundamentals",
    //   image: "../certificates/data.png"
    // },
    {
      name: "Agile SCRUM (SCRUM Study)",
      image: "../certificates/scrum.png",
      url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=955990"
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
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/assets/projects/${cert.image}`}
                    alt={`${cert.name} certificate`}
                    width={200}
                    height={150}
                    className="rounded-lg border border-gray-200 dark:border-gray-700 mb-3 w-full h-auto"
                  />
                </a>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
} 