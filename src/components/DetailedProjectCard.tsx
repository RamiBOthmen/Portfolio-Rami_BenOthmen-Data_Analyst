import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, BarChart3, Database, Target, Lightbulb, TrendingUp, ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";
import { useState } from "react";

interface DetailedProjectCardProps {
  title: string;
  subtitle: string;
  overview: string;
  objectives: string[];
  dataSources: string;
  dataModel: string;
  tools: string[];
  kpis: string[];
  insights: Array<{
    title: string;
    finding: string;
    recommendation: string;
  }>;
  challenges: string[];
  lessons: string[];
  images: string[];
  tableauPath?: string;
  externalLink?: string;
  onBack: () => void;
}

export default function DetailedProjectCard({
  title,
  subtitle,
  overview,
  objectives,
  dataSources,
  dataModel,
  tools,
  kpis,
  insights,
  challenges,
  lessons,
  images,
  tableauPath,
  externalLink,
  onBack
}: DetailedProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
        <p className="text-xl text-sky-600 dark:text-sky-400 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{overview}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Objectives */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-sky-600" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Objectives & Business Questions</h2>
            </div>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Data Sources & Model */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-sky-600" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Sources & Model</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Data Sources:</h3>
                <p className="text-gray-700 dark:text-gray-300">{dataSources}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Data Model:</h3>
                <p className="text-gray-700 dark:text-gray-300">{dataModel}</p>
              </div>
            </div>
          </section>

          {/* Tools & Technologies */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-sky-600" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Tools & Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* KPIs */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-sky-600" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Performance Indicators (KPIs) Tracked</h2>
            </div>
            <ul className="space-y-2">
              {kpis.map((kpi, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{kpi}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Insights & Recommendations */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-sky-600" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Sample Insights & Recommendations</h2>
            </div>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{insight.title}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Finding: </span>
                      <span className="text-gray-600 dark:text-gray-400">{insight.finding}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Recommendation: </span>
                      <span className="text-gray-600 dark:text-gray-400">{insight.recommendation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Lessons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Challenges & Lessons Learned</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Challenges:</h3>
                <ul className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Lessons Learned:</h3>
                <ul className="space-y-2">
                  {lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Dashboard Preview */}
          {tableauPath && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Interactive Dashboard</h3>
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  title={`${title} - Tableau Dashboard`}
                  src={`https://public.tableau.com/views/${tableauPath}?:showVizHome=no&:embed=true`}
                  className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 dark:border-gray-700"
                  allowFullScreen
                />
              </div>
              {externalLink && (
                <Link
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 w-full justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  Open on Tableau Public
                </Link>
              )}
            </div>
          )}

          {/* Project Visualizations */}
          {images && images.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Project Visualizations</h3>
              <div className="space-y-3">
                {images.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedImage(`/assets/projects/${image}`)}>
                    <Image
                      src={`/assets/projects/${image}`}
                      alt={`${title} visualization ${index + 1}`}
                      width={500}
                      height={375}
                      className="rounded-lg border border-gray-200 dark:border-gray-700 w-full h-auto hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <ZoomIn size={24} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Modal */}
          {selectedImage && (
            <ImageModal
              src={selectedImage}
              alt={`${title} visualization`}
              isOpen={!!selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
