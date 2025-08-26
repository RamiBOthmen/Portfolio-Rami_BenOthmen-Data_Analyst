import Section from "@/components/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-8">
      <Section title="About Me">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Software Engineer with a Master's degree in Engineering of Decisional Information Systems and one year of experience developing solutions. Currently transitioning into data analytics and seeking a full-time role as a Data Analyst or Data Engineer. Can start immediately.
          </p>
        </div>
      </Section>

      <Section title="Education">
        <ul className="grid gap-4">
          <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <p className="font-medium">Professional Master's in Engineering of Decisional Information Systems</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Top of the Class (ISET Zaghouan) — 2022–2024</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/projects/master.jpg"
                  alt="Graduation photo - Top of the Class achievement"
                  width={120}
                  height={160}
                  className="rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
          </li>
          <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <p className="font-medium">Bachelor's Degree in Software Engineering</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Faculty of Sciences of Bizerte — 2019–2022</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/projects/bachelor.jpeg"
                  alt="Bachelor's degree graduation photo"
                  width={120}
                  height={160}
                  className="rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
          </li>
        </ul>
      </Section>

      <Section title="Training">
        <ul className="grid gap-4">
          <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <p className="font-medium">Data Analytics Program</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Inco Academy — July 2025 - September 2025</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Completed a comprehensive Data Analytics program covering data cleaning, analysis, and visualization using spreadsheets, SQL, R, and Tableau. Developed skills in problem solving and data ethics, with hands-on experience in organizing datasets, performing calculations, and presenting insights through dashboards and presentations.
            </p>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">Program Instructors:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/imen.png"
                    alt="Imen Zarai"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Imen Zarai</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Business Intelligence Engineer | Data Analyst</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Practical Hands-On Training</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/tony.png"
                    alt="Tony Francis"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Tony Francis</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Program Manager at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Foundations: Data, Data, Everywhere</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/ximena.png"
                    alt="Ximena F."
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Ximena F.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Finance Data Analyst at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Ask Questions to Make Data-Driven Decisions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/Hallie.png"
                    alt="Hallie Roth"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Hallie Roth</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Analytical Lead at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Prepare Data for Exploration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/sally.png"
                    alt="Sally Kim"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Sally Kim</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Analytical Lead at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Process Data from Dirty to Clean</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/ayanna.png"
                    alt="Ayanna Berry"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Ayanna Berry</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Global Insights Manager at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Analyze Data to Answer Questions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Image
                    src="/assets/projects/kevin.png"
                    alt="Kevin Hartman"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Kevin Hartman</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Director of Analytics at Google</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">Share Data Through the Art of Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Section>

      <Section title="Languages">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">Arabic — Native</div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">English — C1</div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">French — Professional Working Proficiency</div>
        </div>
      </Section>
    </div>
  );
} 