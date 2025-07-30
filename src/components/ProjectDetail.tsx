// components/ProjectDetail.tsx
import React, { useEffect } from 'react';
import { X, Github, Instagram, Youtube } from 'lucide-react';
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

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onBack();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onBack]);

    return (
        <>
            {/* Dimmed Background */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                onClick={onBack}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header with diagonal lines pattern */}
                    <div
                        className="relative h-48 flex items-center justify-between px-8"
                        style={{
                            background: 'repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 10px, #f0f0f0 10px, #f0f0f0 20px)',
                        }}
                    >
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {project.title}
                        </h1>
                        <button
                            onClick={onBack}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                        {/* Thumbnail */}
                        <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden mb-6">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Title and Tags */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
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
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {project.fullDescription}
                            </p>
                            {project.skills && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-600 mb-1">Key Skills:</h3>
                                    <p className="text-sm text-gray-600">{project.skills}</p>
                                </div>
                            )}
                        </div>

                        {/* Links - Right Justified */}
                        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                            {project.githubLink && project.githubLink !== '#' && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                            )}
                            {/* Add Instagram and YouTube links when available */}
                            {project.instagramLink && (
                                <a
                                    href={project.instagramLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span className="text-sm">Instagram</span>
                                </a>
                            )}
                            {project.youtubeLink && (
                                <a
                                    href={project.youtubeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    <Youtube className="w-5 h-5" />
                                    <span className="text-sm">YouTube</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;