// components/ProjectDetail.tsx
// @ts-ignore - Lucide icons deprecation warnings
import React, { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Project, Tag } from '../types';

const { X, Github, Instagram, Youtube } = LucideIcons;

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

    // Extract YouTube video ID from URL
    const getYouTubeVideoId = (url: string): string => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : '';
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none">
                <div
                    className="bg-white rounded-lg shadow-2xl w-full max-w-lg animate-fadeIn pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                    style={{ aspectRatio: '9 / 16', maxHeight: '85vh' }}
                >
                    <div className="h-full flex flex-col">
                        {/* Thumbnail or YouTube Player */}
                        <div className="relative h-2/5 flex-shrink-0">
                            {project.youtubeLink && project.youtubeLink !== '#' ? (
                                <div className="h-full bg-black">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.youtubeLink)}`}
                                        title={project.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="h-full bg-gray-100 overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <button
                                onClick={onBack}
                                className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-opacity-100 transition-all shadow-md"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="flex-1 p-8 overflow-y-auto">
                                {/* Title and Tags */}
                                <div className="mb-6">
                                    <h2 className="text-2xl text-gray-800 mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
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

                                {/* Key Skills */}
                                {project.skills && (
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-gray-600 mb-1">Key Skills:</h3>
                                        <p className="text-sm text-gray-600">{project.skills}</p>
                                    </div>
                                )}

                                {/* Description */}
                                <div className="mb-8">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {project.fullDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Fixed Footer - Links */}
                            <div className="flex-shrink-0 px-8 pb-8">
                                <div className="flex justify-start gap-4 pt-4 border-t border-gray-200">
                                    {project.githubLink && project.githubLink !== '#' && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-gray-700 transition-colors"
                                        >
                                            <Github className="w-6 h-6" />
                                        </a>
                                    )}
                                    {project.instagramLink && (
                                        <a
                                            href={project.instagramLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-gray-700 transition-colors"
                                        >
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                    )}
                                    {project.youtubeLink && (
                                        <a
                                            href={project.youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-gray-700 transition-colors"
                                        >
                                            <Youtube className="w-6 h-6" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;