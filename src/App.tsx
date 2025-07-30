// App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import FilterSection from './components/FilterSection';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projects';
import { tags } from './data/tags';
import { personalInfo } from './data/personalInfo';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Add Inter font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Filter projects based on selected tags and search query
  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => project.tags.includes(tag));

    const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTags && matchesSearch;
  });

  // Toggle tag selection
  const toggleTag = (tagName: string) => {
    setSelectedTags(prev =>
        prev.includes(tagName)
            ? prev.filter(t => t !== tagName)
            : [...prev, tagName]
    );
  };

  return (
      <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8', fontFamily: 'Inter, sans-serif' }}>
        {/* Main Content - Always rendered */}
        <div className={`transition-all duration-300 ${selectedProject ? 'opacity-50' : 'opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Header personalInfo={personalInfo} />
            <ProfileSection personalInfo={personalInfo} />
            <FilterSection
                tags={tags}
                selectedTags={selectedTags}
                searchQuery={searchQuery}
                onTagToggle={toggleTag}
                onSearchChange={setSearchQuery}
            />

            {/* Project Card Section */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        tags={tags}
                        isHovered={hoveredCard === project.id}
                        onHover={(isHovered) => setHoveredCard(isHovered ? project.id : null)}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
              </div>
            </section>

            {/* No results message */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No projects found matching your criteria.</p>
                </div>
            )}
          </div>
        </div>

        {/* Project Detail Modal - Rendered on top when selected */}
        {selectedProject && (
            <ProjectDetail
                project={selectedProject}
                tags={tags}
                onBack={() => setSelectedProject(null)}
            />
        )}
      </div>
  );
};

export default App;