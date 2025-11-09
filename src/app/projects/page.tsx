"use client";

import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects, detailedProjects } from "@/data/projects";
import UFCEventAnalysis from "@/components/UFCEventAnalysis";
import DetailedProjectCard from "@/components/DetailedProjectCard";
import ImageModal from "@/components/ImageModal";
import { ArrowRight, ZoomIn } from "lucide-react";

function ProjectCard({ project, onViewDetails }: { 
  project: {
    id: string;
    title: string;
    description: string;
    tools: string;
    dataSource?: string;
    role: string;
    results: string;
    hasDetailedView?: boolean;
    externalLink?: string;
    images?: string[];
  }; 
  onViewDetails: (projectId: string) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/50 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
      
      {/* Images Section */}
      {project.images && project.images.length > 0 && (
        <div className="mt-4">
          {/* <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Project Visualizations:</h4> */}
          <div className="grid grid-cols-1 gap-3">
            {[project.images[0]].map((image: string, index: number) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedIndex(0)}>
                <Image
                  src={`/assets/projects/${image}`}
                  alt={`${project.title} visualization 1`}
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
      {selectedIndex !== null && project.images && project.images[selectedIndex] && (
        <ImageModal
          src={`/assets/projects/${project.images[selectedIndex]}`}
          alt={`${project.title} visualization`}
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          onPrev={project.images.length > 1 ? () => {
            if (selectedIndex === null) return;
            if (selectedIndex === 0) return;
            setSelectedIndex(selectedIndex - 1);
          } : undefined}
          onNext={project.images.length > 1 ? () => {
            if (selectedIndex === null) return;
            const maxIndex = project.images!.length - 1;
            if (selectedIndex === maxIndex) return;
            setSelectedIndex(selectedIndex + 1);
          } : undefined}
          canPrev={project.images.length > 1 ? selectedIndex > 0 : false}
          canNext={project.images.length > 1 ? selectedIndex < project.images.length - 1 : false}
        />
      )}
      
      <div className="mt-3 grid gap-1 text-sm text-gray-600 dark:text-gray-400">
        <p><span className="font-medium text-gray-800 dark:text-gray-200">Tools & Technologies:</span> {project.tools}</p>
        {project.dataSource && <p><span className="font-medium text-gray-800 dark:text-gray-200">Data Source:</span> {project.dataSource}</p>}
        <p><span className="font-medium text-gray-800 dark:text-gray-200">My Role:</span> {project.role}</p>
        <p><span className="font-medium text-gray-800 dark:text-gray-200">Key Results:</span> {project.results}</p>
      </div>
      
      <div className="mt-4 flex gap-2">
        {project.hasDetailedView && (
          <button
            onClick={() => onViewDetails(project.id)}
            className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors"
          >
            View Details
            <ArrowRight size={16} />
          </button>
        )}
        {project.externalLink && (
          <Link
            href={project.externalLink}
            {...(!project.externalLink.startsWith("/") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {project.externalLink.startsWith("/") ? "View Project" : "Open Source"}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleViewDetails = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleBack = () => {
    setSelectedProjectId(null);
  };

  // If a project is selected, show the detailed view
  if (selectedProjectId) {
    if (selectedProjectId === "ufc-event-analysis") {
      return (
        <div className="py-8">
          <Section title="Projects" subtitle="Selected work in analytics, BI, and AI-driven systems.">
            <button
              onClick={handleBack}
              className="mb-6 inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Back to Projects
            </button>
            <UFCEventAnalysis />
          </Section>
        </div>
      );
    }
    if (detailedProjects[selectedProjectId]) {
      const project = detailedProjects[selectedProjectId];
      return (
        <div className="py-8">
          <Section title="Projects" subtitle="Selected work in analytics, BI, and AI-driven systems.">
            <DetailedProjectCard
              {...project}
              onBack={handleBack}
            />
          </Section>
        </div>
      );
    }
  }

  // Show the overview grid
  return (
    <div className="py-8">
      <Section title="Projects" subtitle="Selected work in analytics, BI, and AI-driven systems.">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>More on my GitHub: <Link className="text-sky-700 dark:text-sky-300 hover:underline" href="https://github.com/RBenOthmen" target="_blank">github.com/RBenOthmen</Link></p>
        </div>
      </Section>
    </div>
  );
} 