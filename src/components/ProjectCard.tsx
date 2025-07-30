// components/ProjectCard.tsx
import React from 'react';
import { Project, Tag } from '../types';

interface ProjectCardProps {
    project: Project;
    tags: Tag[];
    onHover: (isHovered: boolean) => void;
    onClick: () => void;
    isHovered: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     project,
                                                     tags,
                                                     onHover,
                                                     onClick,
                                                     isHovered
                                                 }) => {
    const getTagColor = (tagName: string): string => {
        const tag = tags.find(t => t.name === tagName);
        return tag ? tag.color : '#666';
    };

    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer col-span-1"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={onClick}
        >
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                        isHovered ? 'scale-110' : ''
                    }`}
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                    {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                </p>
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
        </div>
    );
};

export default ProjectCard;