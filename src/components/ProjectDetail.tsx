// components/ProjectDetail.tsx
import React from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import { Project, Tag } from '../types';

interface ProjectDetailProps {
    project: Project;
    tags: Tag[];
    onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, tags, onBack }) => {
    const getTagColor = (tagName: string): string => {
        const tag = tags.find(t => t.name === tagName);
        return tag ? tag.color : '#666';
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                    className="h-64 md:h-96 flex items-center justify-center p-8"
                    style={{
                        background: 'repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 10px, #f0f0f0 10px, #f0f0f0 20px)',
                    }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.title}
                    </h1>
                </div>

                <div className="p-8">
                    <div className="relative h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Project Details</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                        style={{ backgroundColor: getTagColor(tag) }}
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Skills</h3>
                            <p className="text-gray-600">{project.skills}</p>
                        </div>

                        {project.githubLink && project.githubLink !== '#' && (
                            <div className="pt-4 border-t border-gray-200">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;